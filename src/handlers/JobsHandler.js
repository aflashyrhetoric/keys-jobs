import init from "./initHandler"
import { fetchZyteData } from "../zyte"
import Product from "../model/Product"

export default class JobsHandler {
  static async FetchScrapedDataFromZyte(req, res, next) {
    const { redis } = init()
    const runNumber = req.params.runNumber

    let data = await fetchZyteData(runNumber)
    await redis.set("raw_product_data", JSON.stringify(data))
    await redis.set("raw_products_last_updated", `${new Date()}`)
    const msg = `Products successfully refreshed for run #${runNumber}`

    return res.json({
      status: 200,
      msg,
    })
  }

  static async CacheVerifiedProductData(req, res, next) {
    const { redis } = init()

    const time = new Date()

    const data = await Product.getAll()
    await redis.set("verified_product_data", JSON.stringify(data))
    await redis.set("verified_products_last_updated", `${time}`)
    const msg = `Verified products have been cached at ${time}`

    return res.json({
      status: 200,
      msg,
    })
  }

  // async SaveProductData(fields) {
  //   console.log(fields)
  // }
}
