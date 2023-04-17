import { Request, Response, NextFunction } from "express";
import ApiError from "../error/ApiError.js";
import typeServices from "../services/typeServices.js";

class TypeController {
  async addType(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const type = await typeServices.addType(name);
      if (type.name === "Error") {
        throw new Error();
      }
      res.status(200).json(type);
    } catch (error) {
      ApiError.badRequest("Некоректные данные");
    }
  }

  async getTypes(req: Request, res: Response, next: NextFunction) {
    try {
      const types = await typeServices.getTypes();
      res.status(200).json(types);
    } catch (error) {
      ApiError.internal("Не удалось получить типы девайсов");
    }
  }
}

export default new TypeController();
