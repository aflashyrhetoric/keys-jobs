import db from "./db"
// Model is responsible for calling db related functions
export default class Product {
  static saveNewProduct(product) {
    return db.insert(product, ["id"]).into("products")
  }
  static saveUpdatesToProduct(id, updatedProduct) {
    return db
      .where("id", "=", id)
      .update(updatedProduct, ["id"])
      .into("products")
  }
  static deleteProduct(id, updatedProduct) {
    return db("products").where("id", "=", id).delete()
  }
}
