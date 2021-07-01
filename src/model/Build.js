import db from "./db"
// Model is responsible for calling db related functions
export default class Build {
  static getAll() {
    return db.select().from("builds")
  }
  static saveNewProduct(product) {
    return db.insert(product, ["id"]).into("builds")
  }
  static saveUpdatesToProduct(sku, updatedProduct) {
    return db
      .where("sku", "=", sku)
      .update(updatedProduct, ["sku"])
      .into("builds")
  }
  static deleteProduct(sku, updatedProduct) {
    return db("builds").where("sku", "=", sku).delete()
  }
}
