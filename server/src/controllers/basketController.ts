import { Request, Response, NextFunction } from "express";
import ApiError from "../error/ApiError.js";
import basketServices from "../services/basketServices.js";

class BasketController {
  async addDevice(req: Request, res: Response, next: NextFunction) {
    try {
      const { deviceId, basketId } = req.body;
      const response = await basketServices.addDevice(deviceId, basketId);
      if (response?.name === "Error") {
        throw new Error();
      }
      res.status(200).json({ message: "Товар успешно добавлен в корзину" });
    } catch (error) {
      next(ApiError.internal("Не удалось добавить товар в корзину"));
    }
  }

  async deleteDevice(req: Request, res: Response, next: NextFunction) {
    try {
      const { deviceId, basketId } = req.body;
      const deviceID = await basketServices.deleteDevice(deviceId, basketId);
      res.status(200).json({ deviceID });
    } catch (error) {
      next(ApiError.internal("Не удалось удалить товар из корзины"));
    }
  }

  async getUserBasket(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const basket = await basketServices.getUserBasket(+id);
      if (basket?.name === "Error") {
        throw new Error();
      }
      res.status(200).json(basket);
    } catch (error) {
      next(ApiError.internal("Не удалось получить корзину"));
    }
  }

  async getBasketDevices(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const devices = await basketServices.getBasketDevices(+id);
      res.status(200).json(devices);
    } catch (error) {
      next(ApiError.internal("Не удалось получить товары из корзины"));
    }
  }
}

export default new BasketController();
