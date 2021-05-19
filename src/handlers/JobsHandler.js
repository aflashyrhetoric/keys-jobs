import init from "./initHandler"
import { fetchZyteData } from "../zyte"

export default class JobsHandler {
  static async FetchScrapedDataFromZyte(req, res, next) {
    const { redis } = init()
    const runNumber = req.params.runNumber

    let data = await fetchZyteData(runNumber)
    await redis.set("raw_product_data", JSON.stringify(data))
    await redis.set("raw_products_last_updated", `${new Date()}`)
    const msg = `Products successfully refreshed for run #${runNumber}`
    console.log(msg)

    return res.json({
      status: 200,
      msg,
    })
  }

  // async SaveProductData(fields) {
  //   console.log(fields)
  // }
}
