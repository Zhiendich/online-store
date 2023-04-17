import db from "../db/db.js";

class BrandServices {
  async addBrand(name: string) {
    try {
      const brand = await db.query(
        "insert into brand (name) values ($1) RETURNING *",
        [name]
      );
      return brand.rows[0];
    } catch (error) {
      return Error("Error");
    }
  }

  async getBrands() {
    try {
      const brands = await db.query("select * from brand");
      return brands.rows;
    } catch (error) {
      return Error("Error");
    }
  }
}

export default new BrandServices();
