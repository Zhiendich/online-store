import db from "../db/db.js";
import bcrypt from "bcryptjs";
import tokenServices from "./tokenService.js";
import basketServices from "./basketServices.js";

class UserServices {
  async registration(email: string, password: string) {
    try {
      const find = await db.query("SELECT * FROM person where email = $1", [
        email,
      ]);
      if (find.rows.length) {
        throw Error("Пользователь уже занят");
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const newUser = await db.query(
        "INSERT INTO person ( email, password) values ($1,$2) RETURNING *",
        [email, hashPassword]
      );
      await basketServices.addUserBasket(newUser.rows[0].id);
      return newUser.rows[0];
    } catch (error) {
      return Error("Ошибка");
    }
  }
  async login(email: string, password: string) {
    try {
      const userPassword = await db.query(
        "SELECT password FROM person where email = $1",
        [email]
      );
      const isPasswordEqual = await bcrypt.compare(
        password,
        userPassword.rows[0].password
      );
      if (isPasswordEqual) {
        const user = await db.query("SELECT * FROM person where email = $1", [
          email,
        ]);
        if (user.rows.length) {
          const token = tokenServices.generateToken({
            id: user.rows[0].id,
            email: user.rows[0].email,
            role: user.rows[0].role,
          });
          return { token, user: user.rows[0] };
        }
      } else {
        throw Error("Неправильный пароль");
      }
    } catch (error) {
      return Error("Ошибка");
    }
  }
  async getUser(id: number) {
    try {
      const user = await db.query("SELECT * FROM person where id = $1", [id]);
      if (user) {
        return user.rows[0];
      }
      throw Error("Пользователя не существует");
    } catch (error) {
      return Error("Ошибка");
    }
  }
}

export default new UserServices();
