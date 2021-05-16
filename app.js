import express from "express"
import ProductsHandler from "./src/handlers/ProductsHandler"
import JobsHandler from "./src/handlers/JobsHandler"

// import { fetchZyteData } from "./src/zyte"

const findProductsWithNullValues = data =>
  data.filter(checkIfProductHasNullKeys)

const checkIfProductHasNullKeys = product =>
  Object.entries(product).some(([key, value]) => value === null)

// **************
// ***************
// Initialize Express
// ***************
const app = express()

// ***************
// Routes / Endpoints
// ***************
app.get("/refresh_product_data/:runNumber", JobsHandler.RefreshProductData)
app.get("/fetch_product_data", ProductsHandler.getProductData)
app.get("/fetch_null_product_data", async (req, res, next) => {
  let data = await redis.get("product_data")
  // console.log(data)

  data = JSON.parse(data)
  data = findProductsWithNullValues(data)
  // console.log(data)

  res.setHeader("Access-Control-Allow-Origin", "*")

  res.json({
    status: 200,
    data,
  })
})

app.listen(3210, () => {
  console.log(`running on port 3210`)
})
