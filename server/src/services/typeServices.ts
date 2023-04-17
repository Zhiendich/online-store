import db from "../db/db.js";

class TypeServices {
  async addType(name: string) {
    try {
      const type = await db.query(
        "insert into type (name) values ($1) RETURNING *",
        [name]
      );
      return type.rows[0];
    } catch (error) {
      return Error("Не удалось добавить тип девайса");
    }
  }

  async getTypes() {
    try {
      const types = await db.query("select * from type");
      return types.rows;
    } catch (error) {
      return Error("Не удалось добавить тип девайса");
    }
  }
}

export default new TypeServices();
