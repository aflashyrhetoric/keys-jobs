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
}
