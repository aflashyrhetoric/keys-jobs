import init from "./initHandler"
export default class ProductsHandler {
  static async getProductData(req, res) {
    const { redis } = init()
    const data = await redis.get("product_data")

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.json({
      status: 200,
      data,
    })
  }

  static async getNullProductData(req, res) {
    const { redis } = init()
    const data = await redis.get("product_data")

    const checkIfProductHasNullKeys = product =>
      Object.entries(product).some(([key, value]) => value === null)
    const findProductsWithNullValues = data =>
      data.filter(checkIfProductHasNullKeys)

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.json({
      status: 200,
      data: findProductsWithNullValues(JSON.parse(data)),
    })
  }

  // async SaveProductData(fields) {
  //   console.log(fields)
  // }
}
