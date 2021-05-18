import express from "express"
import ProductsHandler from "./src/handlers/ProductsHandler"
import JobsHandler from "./src/handlers/JobsHandler"

const app = express()

// *************************************
// Jobs-related routes (not used by app)
// *************************************
app.get(
  "/refresh_product_data/:runNumber",
  JobsHandler.FetchScrapedDataFromZyte,
)

// ******************
// Application routes
// ******************

// GENERAL APPLICATION ROUTES
app.get("/fetch_product_data", ProductsHandler.getProductData)

// DEBUG-ONLY ROUTES
// app.get("/fetch_null_product_data", ProductsHandler.getNullProductData)

// ******************************
// All your base are belong to us
// ******************************
app.listen(3210, () => {
  console.log(`running on port 3210`)
})
