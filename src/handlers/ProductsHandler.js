export default class ProductsHandler {
  constructor(redis, msg) {
    this.redis = redis
    this.msg = msg
    console.log("ProductsHandler initialized")
  }

  async GetProductData(req, res, next) {
    console.log(this.msg)
    // const data = await this.redis.get("product_data")

    // res.setHeader("Access-Control-Allow-Origin", "*")

    // return res.json({
    //   status: 200,
    //   data,
    // })
  }

  async SaveProductData(fields) {
    console.log(fields)
  }
}
