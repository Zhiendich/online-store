import { Request, Response, NextFunction } from "express";
import ApiError from "../error/ApiError.js";
import ratingServices from "../services/ratingServices.js";

class RaitingController {
  async addRating(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, deviceId, rate } = req.body;
      await ratingServices.addRating(userId, deviceId, rate);
      res.status(200).json("Рейтинг успешно добавлен");
    } catch (error) {
      console.log(error);
      next(ApiError.internal("Не удалось поставить рейтинг"));
    }
  }
}

export default new RaitingController();
