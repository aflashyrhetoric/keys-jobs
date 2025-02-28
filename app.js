import express from "express"
import cors from "cors"
import ProductsHandler from "./src/handlers/ProductsHandler"
import BuildsHandler from "./src/handlers/BuildsHandler"
import JobsHandler from "./src/handlers/JobsHandler"
import BarcodeHandler from "./src/handlers/BarcodeHandler"

import ProductsController from "./src/controllers/ProductsController"
import BuildsController from "./src/controllers/BuildsController"

// require("dotenv").config()

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

const app = express()

// Enable CORS pre-flight stuff and receipt of JSON bodies: https://www.npmjs.com/package/cors#configuration-options
const corsConfig = {
  origin: true, // Sets the origin equal to the origin of the request (as defined by req.Header("Origin"))
  credentials: true, // Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted.
}
app.use(cors(corsConfig))
app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// *************************************
// Jobs-related routes (not used by app)
// *************************************
app.get("/cache_scraped_data/:runNumber", JobsHandler.FetchScrapedDataFromZyte)
app.get("/cache_verified_data", JobsHandler.CacheVerifiedProductData)

// ******************
// Application routes
// ******************

// GENERAL APPLICATION ROUTES
app.get("/fetch_product_data", ProductsHandler.getProductData)
app.get("/fetch_product_data_admin", ProductsHandler.getProductDataAdmin)
app.post("/fetch_product_data", ProductsHandler.getProductData)

// Products
app.post("/products", ProductsController.saveNewProduct)
app.patch("/products/:sku", ProductsController.updateProduct)
app.delete("/products/:sku", ProductsController.deleteProduct)

// Builds
// app.get("/builds", BuildsController.saveNewBuild)

app.post("/search_products", BarcodeHandler.searchBarcode)

// DEBUG-ONLY ROUTES
// app.get("/fetch_null_product_data", ProductsHandler.getNullProductData)

// ******************************
// All your base are belong to us
// ******************************
app.listen(3210, () => {
  console.log(`running on port 3210`)
})
