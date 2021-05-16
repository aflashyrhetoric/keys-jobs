import { fetchZyteData } from "../zyte"

export default class JobsHandler {
  constructor(redis) {
    this.redis = redis
  }
  async RefreshProductData(req, res, next) {
    const runNumber = req.params.runNumber

    let data = await fetchZyteData(runNumber)
    await this.redis.set("product_data", JSON.stringify(data))
    await this.redis.set("products_last_updated", `${new Date()}`)
    const msg = `Products successfully refreshed for run #${runNumber}`
    console.log(msg)

    return res.json({
      status: 200,
      msg,
    })
  }

  async SaveProductData(fields) {
    console.log(fields)
  }
}
