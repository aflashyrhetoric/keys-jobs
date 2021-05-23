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
    const query = req.body.query
    const page = req.body.page

    // Initialize some constants
    const BARCODE_LOOKUP_API_KEY = process.env.BARCODE_LOOKUP_API_KEY
    const BARCODE_LOOKUP_BASEURL = "https://api.barcodelookup.com/v2/products"

    // Parameters for request
    const paramForSearch = "search"
    const paramForAuth = `key=${BARCODE_LOOKUP_API_KEY}`
    const paramForLocation = `geo=us`
    const paramForPage = `page=${page}`
    const paramForCategory = `category=${encodeURIComponent(
      "Electronics > Electronics Accessories",
    )}`

    // Empty queries return empty queries
    if (query === "") return Promise.resolve([])

    const q = encodeURIComponent(query)

    // Join the parameters
    const searchURLComponents = [
      BARCODE_LOOKUP_BASEURL,
      "/?",
      paramForSearch,
      "=",
      q,
      "&",
      paramForLocation,
      "&",
      paramForCategory,
      "&",
      paramForPage,
      "&",
      paramForAuth,
    ]
    const searchURL = searchURLComponents.join("")

    await fetch(searchURL)
      .then(r => {
        return r.json()
      })
      .then(data => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
        res.json({
          status: 200,
          data,
          error: null,
        })
      })
      .catch(e => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
        res.json({
          status: 200,
          data: [],
          error: e,
        })
      })
  }
}
