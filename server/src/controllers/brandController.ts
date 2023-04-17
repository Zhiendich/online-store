import { Request, Response, NextFunction } from "express";
import ApiError from "../error/ApiError.js";
import brandService from "../services/brandService.js";

class BrandController {
  async addBrand(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const brand = await brandService.addBrand(name);
      if (brand.name === "Error") {
        throw new Error();
      }
      res.status(200).json(brand);
    } catch (error) {
      ApiError.badRequest("Некоректные данные");
    }
  }

  async getBrands(req: Request, res: Response, next: NextFunction) {
    try {
      const brands = await brandService.getBrands();
      res.status(200).json(brands);
    } catch (error) {
      ApiError.internal("Не удалось получить бренды");
    }
  }
}

export default new BrandController();
