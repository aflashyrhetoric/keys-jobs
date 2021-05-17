import express from "express"
import ProductsHandler from "./src/handlers/ProductsHandler"
import JobsHandler from "./src/handlers/JobsHandler"

const app = express()

// ******************
// Routes / Endpoints
// ******************
app.get("/refresh_product_data/:runNumber", JobsHandler.RefreshProductData)

app.get("/fetch_product_data", ProductsHandler.getProductData)
app.get("/fetch_null_product_data", ProductsHandler.getNullProductData)
app.listen(3210, () => {
  console.log(`running on port 3210`)
})
