import init from "./initHandler"
import Product from "../../src/model/Product"

export default class ProductsHandler {
  // Returns the product data from the Redis cache
  static async getRawProductData(req, res) {
    const { redis } = init()
    const data = await redis.get("raw_product_data")

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.json({
      status: 200,
      data: JSON.parse(data),
    })
  }

  static async getProductData(req, res) {
    const { redis } = init()
    const data = await redis.get("verified_product_data")

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.json({
      status: 200,
      data: JSON.parse(data),
    })
  }

  static async getProductDataAdmin(req, res) {
    const { redis } = init()
    const scraped_data = await redis.get("raw_product_data")
    const products = await Product.getAll()

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.json({
      status: 200,
      data: {
        scraped_data,
        products,
      },
    })
  }
}
