import init from "./initHandler"
export default class ProductsHandler {
  static async getProductData(req, res, next) {
    const { redis } = init()
    const data = await redis.get("product_data")

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.json({
      status: 200,
      data,
    })
  }

  // async SaveProductData(fields) {
  //   console.log(fields)
  // }
}
