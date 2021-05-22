// Client for dealing with Barcode Lookup
import init from "./initHandler"
const fetch = require("node-fetch")
require("dotenv").config()

export default class BarcodeHandler {
  // Returns the product data with null values from the Redis cache
  // static async getNullProductData(req, res) {
  //   const { redis } = init()
  //   const data = await redis.get("product_data")
  //   const checkIfProductHasNullKeys = product =>
  //     Object.entries(product).some(([key, value]) => value === null)
  //   const findProductsWithNullValues = data =>
  //     data.filter(checkIfProductHasNullKeys)
  //   res.setHeader("Access-Control-Allow-Origin", "*")
  //   res.json({
  //     status: 200,
  //     data: findProductsWithNullValues(JSON.parse(data)),
  //   })
  // }

  static async searchBarcode(req, res) {
    const BARCODE_LOOKUP_API_KEY = process.env.BARCODE_LOOKUP_API_KEY
    const BARCODE_LOOKUP_BASEURL = "https://api.barcodelookup.com/v2/products"
    const paramForSearch = "search"
    const paramForAuth = `key=${BARCODE_LOOKUP_API_KEY}`
    // console.log(req.body)

    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    // res.json({
    //   status: 200,
    //   data: req.body.query,
    // })
    // return

    const query = req.body.query

    // Empty queries return empty queries
    if (query === "") return Promise.resolve([])

    const q = encodeURIComponent(query)
    const searchURL = `${BARCODE_LOOKUP_BASEURL}/?${paramForSearch}=${q}&${paramForAuth}`
    const data = await fetch(searchURL).then(r => r.json())

    console.log(query, searchURL)

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.json({
      status: 200,
      data,
    })
  }
}
