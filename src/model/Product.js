import db from "./db"
// Model is responsible for calling db related functions
export default class Product {
  static saveNewProduct(product) {
    return db.insert(product, ["id"]).into("products")
  }
  // updateProduct(){}
  // deleteProduct(){}
}
