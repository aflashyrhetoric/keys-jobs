import express from "express"
import ProductsHandler from "./src/handlers/ProductsHandler"
import JobsHandler from "./src/handlers/JobsHandler"

const Redis = require("ioredis")
require("dotenv").config()

// import { fetchZyteData } from "./src/zyte"

const findProductsWithNullValues = data =>
  data.filter(checkIfProductHasNullKeys)

const checkIfProductHasNullKeys = product =>
  Object.entries(product).some(([key, value]) => value === null)

// ***************
// Configure Redis
// ***************
const redisConnectionString = `rediss://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
const redis = new Redis(redisConnectionString) // uses defaults unless given configuration object

// ***************
// Initialize Express
// ***************
const app = express()

const productsHandler = new ProductsHandler(redis, "hi")
const jobsHandler = new JobsHandler(redis)

console.log(productsHandler.redis.get)

// ***************
// Routes / Endpoints
// ***************
app.get("/refresh_product_data/:runNumber", jobsHandler.RefreshProductData)
app.get("/fetch_product_data", productsHandler.GetProductData)
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
