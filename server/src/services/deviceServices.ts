import { IDevice } from "../models/device.js";
import db from "../db/db.js";
import IDeviceInfo from "../models/device_info.js";
import ratingServices from "./ratingServices.js";
class DeviceServices {
  async addDevice(
    { name, price, img, brandId, typeId }: IDevice,
    info: IDeviceInfo[]
  ) {
    try {
      const device = await db.query(
        "insert into device (name, price,  img, brandId, typeId) values ($1, $2,$3,$4,$5) RETURNING *",
        [name, price, img, brandId, typeId]
      );
      info.forEach((i) => {
        const current = db.query(
          "insert into device_info (device_id, title, description) values ($1, $2,$3) returning *",
          [device.rows[0].id, i.title, i.description]
        );
      });
      return device.rows[0];
    } catch (error) {
      console.log(error);
      return Error("Не удалось добавить товар");
    }
  }
  async getDevices(
    brandId: string | undefined,
    typeId: string | undefined,
    offset: number,
    limit: number
  ) {
    try {
      let devices;
      if (brandId === "undefined" && typeId !== "undefined") {
        devices = await db.query(
          "select device.* , type.name as typename, brand.name as brandname,  count(*) OVER() as total_count from device  INNER JOIN brand ON device.brandid = brand.id INNER JOIN type ON device.typeid = type.id where device.typeid = $1 LIMIT $2 OFFSET $3",
          [typeId, limit, offset]
        );
      } else if (brandId !== "undefined" && typeId === "undefined") {
        devices = await db.query(
          "select device.* , type.name as typename, brand.name as brandname,  count(*) OVER() as total_count from device  INNER JOIN brand ON device.brandid = brand.id INNER JOIN type ON device.typeid = type.id where device.brandid = $1 LIMIT $2 OFFSET $3",
          [brandId, limit, offset]
        );
      } else if (brandId !== "undefined" && typeId !== "undefined") {
        devices = await db.query(
          "select device.* , type.name as typename, brand.name as brandname,  count(*) OVER() as total_count from device INNER JOIN brand ON device.brandid = brand.id INNER JOIN type ON device.typeid = type.id where device.brandid = $1 and device.typeid = $2 LIMIT $3 OFFSET $4",
          [brandId, typeId, limit, offset]
        );
      } else {
        devices = await db.query(
          "select device.* , type.name as typename, brand.name as brandname,  count(*) OVER() as total_count from device INNER JOIN brand ON device.brandid = brand.id INNER JOIN type ON device.typeid = type.id LIMIT $1 OFFSET $2",
          [limit, offset]
        );
      }
      if (devices.rows.length) {
        return {
          devices: devices.rows,
          count: Number(devices.rows[0].total_count),
        };
      }
      throw new Error();
    } catch (error) {
      console.log(error);
      return Error("Не удалось получить товары");
    }
  }
  async getDevice(id: string) {
    try {
      const rating = await ratingServices.getAverageRating(id);
      await db.query("UPDATE device SET rating = $1 WHERE id = $2", [
        rating,
        id,
      ]);
      const devices = await db.query(
        "select device.*,  json_agg(device_info.*) AS info from device INNER JOIN device_info ON device.id = device_info.device_id  where device.id = $1 GROUP BY device.id",
        [id]
      );

      if (devices.rows.length) {
        if (devices.rows[0].rating === 0) {
          devices.rows[0].rating = "Товар не оценен";
          return devices.rows[0];
        } else {
          return devices.rows[0];
        }
      }
      throw new Error();
    } catch (error: any) {
      console.log(error);
      return Error("Не удалось получить товар");
    }
  }
}

export default new DeviceServices();
