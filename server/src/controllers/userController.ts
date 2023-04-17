import { Request, Response, NextFunction } from "express";
import ApiError from "../error/ApiError.js";
import { RequestUser } from "../models/user.js";
import userService from "../services/userServices.js";
class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await userService.login(email, password);
      if (user?.hasOwnProperty("message")) {
        throw new Error();
      }
      res.status(200).json(user);
    } catch (error) {
      next(ApiError.badRequest("Неправильный логин или пароль"));
    }
  }
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await userService.registration(email, password);
      if (user.name === "Error") {
        throw new Error();
      }
      res.status(200).json(user);
    } catch (error) {
      next(
        ApiError.badRequest("Некоректные данные или пользователь уже занят")
      );
    }
  }
  async isUserAuth(req: Request, res: Response, next: NextFunction) {
    try {
      const typedReq = req as RequestUser;
      const getUser = typedReq.user;
      const user = await userService.getUser(getUser.id);
      if (user.name === "Error") {
        throw new Error();
      }
      res.status(200).json(user);
    } catch (error) {
      next(ApiError.forbidden("Нет доступа"));
    }
  }
}

export default new UserController();
