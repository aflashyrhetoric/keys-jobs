import Product from "../model/Product"
export default class ProductsController {
  static async saveNewProduct(req, res) {
    const product = req.body.product
    const addedID = await Product.saveNewProduct(product)

    res.json({
      status: 200,
      data: addedID,
    })
    const sku = req.params.sku
    const product = req.body.product
    const updatedID = await Product.saveUpdatesToProduct(sku, product)

    res.json({
      status: 200,
      data: updatedID,
    })
  }

  static async deleteProduct(req, res) {
    const sku = req.params.sku
    const product = req.body.product
    const deletedID = await Product.deleteProduct(sku, product)

    res.json({
      status: 200,
      data: deletedID,
    })
  }
}
