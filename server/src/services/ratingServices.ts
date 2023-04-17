import db from "../db/db.js";
class RatingService {
  async addRating(userId: string, deviceId: string, rate: string) {
    try {
      const find = await db.query(
        "SELECT * FROM rating WHERE user_id = $1 AND device_id = $2",
        [userId, deviceId]
      );
      if (find.rows.length) {
        const rating = await db.query(
          "UPDATE rating SET rate = $1 WHERE user_id = $2 AND device_id = $3",
          [rate, userId, deviceId]
        );
        return rating.rows;
      } else {
        const rating = await db.query(
          "INSERT INTO rating (rate, user_id, device_id) values ($1,$2,$3) RETURNING *",
          [rate, userId, deviceId]
        );
        return rating.rows;
      }
    } catch (error) {
      console.log(error);
      return new Error();
    }
  }
  async getAverageRating(deviceId: string) {
    const rating = await db.query(
      "SELECT AVG(rate) from rating WHERE device_id = $1",
      [deviceId]
    );
    return Number(rating.rows[0].avg).toFixed(2);
  }
}

export default new RatingService();
