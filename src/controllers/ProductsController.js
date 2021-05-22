import Product from "../model/Product"
export default class ProductsController {
  static async saveNewProduct(req, res) {
    const product = req.body.product
    const addedID = await Product.saveNewProduct(product)

    res.json({
      status: 200,
      data: addedID,
    })
  }
  static async updateProduct(req, res) {
    const productID = req.params.productID
    const product = req.body.product
    const updatedID = await Product.saveUpdatesToProduct(productID, product)

    res.json({
      status: 200,
      data: updatedID,
    })
  }
  static async deleteProduct(req, res) {
    const productID = req.params.productID
    const product = req.body.product
    const deletedID = await Product.deleteProduct(productID, product)

    res.json({
      status: 200,
      data: deletedID,
    })
  }
}
