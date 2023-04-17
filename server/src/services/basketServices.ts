import db from "../db/db.js";

class BasketServices {
  async addUserBasket(id: string) {
    try {
      const basket = await db.query(
        "insert into basket (user_id) values ($1) RETURNING * ",
        [id]
      );
      return basket.rows[0];
    } catch (error) {
      return Error("Не удалось добавить товар");
    }
  }
  async addDevice(deviceId: string, basketId: string) {
    try {
      const find = await db.query(
        "select * from basket_device where device_id = $1 and basket_id = $2 ",
        [deviceId, basketId]
      );
      if (find.rows.length) {
        return Error("Товар уже находиться в корзине");
      }
      const basket = await db.query(
        "insert into basket_device (device_id, basket_id) values ($1, $2) RETURNING * ",
        [deviceId, basketId]
      );
      return basket.rows[0];
    } catch (error) {
      return Error("Не удалось добавить товар");
    }
  }

  async deleteDevice(deviceID: string, basketId: string) {
    try {
      const basket = await db.query(
        "delete from basket_device where device_id = $1 and basket_id = $2",
        [deviceID, basketId]
      );
      return deviceID;
    } catch (error) {
      return Error("Не удалось удалить товар");
    }
  }

  async getUserBasket(id: number) {
    try {
      const basket = await db.query("select * from basket where user_id = $1", [
        id,
      ]);
      return basket.rows[0];
    } catch (error) {
      return Error("Не удалось добавить товар");
    }
  }
  async getBasketDevices(id: number) {
    try {
      const devices = await db.query(
        "select  device.*, type.name as typename, brand.name as brandname from basket_device INNER JOIN device ON device.id = basket_device.device_id INNER JOIN brand ON device.brandid = brand.id INNER JOIN type ON device.typeid = type.id where basket_id = $1 ",
        [id]
      );
      return devices.rows;
    } catch (error) {
      console.log(error);
      return Error("Не удалось добавить товар");
    }
  }
}

export default new BasketServices();
