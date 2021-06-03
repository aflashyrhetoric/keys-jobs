import db from "./db"
// Model is responsible for calling db related functions
export default class Product {
  static getAll() {
    return db.select().from("products")
  }
  static saveNewProduct(product) {
    return db.insert(product, ["id"]).into("products")
  }
  static saveUpdatesToProduct(sku, updatedProduct) {
    return db
      .where("sku", "=", sku)
      .update(updatedProduct, ["sku"])
      .into("products")
  }
  static deleteProduct(sku, updatedProduct) {
    return db("products").where("sku", "=", sku).delete()
  }
}
