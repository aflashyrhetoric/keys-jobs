import express from "express"
const Redis = require("ioredis")

import { fetchZyteData } from "./src/zyte"

// ***************
// Configure Redis
// ***************
const redisConnectionString = `rediss://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
const redis = new Redis(redisConnectionString) // uses defaults unless given configuration object

// ***************
// Initialize Express
// ***************
const app = express()

// ***************
// Routes / Endpoints
// ***************
app.get("/refresh_product_data", async (req, res, next) => {
  let data = await fetchZyteData()
  await redis.set("product_data", JSON.stringify(data))
  await redis.set("products_last_updated", `${new Date()}`)
  const msg = "Products successfully refreshed"
  console.log(msg)
  
  res.json({
    status: 200,
    msg,
  })
})

app.get("/fetch_product_data", async (req, res, next) => {
  let data = await redis.get("product_data")
  // await redis.set("products_last_updated", `${new Date()}`)
  // const msg = "Products successfully refreshed"
  // console.log(msg)
  
  res.json({
    status: 200,
    data,
  })
})

app.listen(3210, () => {
  console.log(`running on port 3210`)
})
