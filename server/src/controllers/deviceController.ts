import { Request, Response, NextFunction } from "express";
import ApiError from "../error/ApiError.js";
import deviceServices from "../services/deviceServices.js";

class DeviceController {
  async addDevice(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, price, img, typeId, brandId } = req.body.newDevice;
      const { info } = req.body;
      const device = await deviceServices.addDevice(
        {
          name,
          price,
          img,
          typeId,
          brandId,
        },
        info
      );
      if (device.name === "Error") {
        throw new Error();
      }
      res.status(200).json(device);
    } catch (error) {
      next(ApiError.badRequest("Не удалось добавить пост"));
    }
  }
  async getDevices(req: Request, res: Response, next: NextFunction) {
    try {
      let { brandId, typeId, page, limit } = req.query;
      page = page || "1";
      limit = limit || "8";
      let offset = Number(page) * Number(limit) - Number(limit);
      const devices = await deviceServices.getDevices(
        String(brandId),
        String(typeId),
        offset,
        Number(limit)
      );
      res.status(200).json(devices);
    } catch (error) {
      next(ApiError.internal("Не удалось получить устройста"));
    }
  }
  async getDevice(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const device = await deviceServices.getDevice(id);
      if (device.name === "Error") {
        throw new Error();
      }
      res.status(200).json(device);
    } catch (error) {
      next(ApiError.notFound("Не удалось получить устройство"));
    }
  }
}

export default new DeviceController();
