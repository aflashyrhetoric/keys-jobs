import express from "express"
import cors from "cors"
import ProductsHandler from "./src/handlers/ProductsHandler"
import JobsHandler from "./src/handlers/JobsHandler"
import BarcodeHandler from "./src/handlers/BarcodeHandler"

import ProductsController from "./src/controllers/ProductsController"

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
app.get(
  "/refresh_product_data/:runNumber",
  JobsHandler.FetchScrapedDataFromZyte,
)

// ******************
// Application routes
// ******************

// GENERAL APPLICATION ROUTES
app.get("/fetch_product_data", ProductsHandler.getProductData)
app.post("/fetch_product_data", ProductsHandler.getProductData)

// Products
app.post("/products", ProductsController.saveNewProduct)

app.post("/search_products", BarcodeHandler.searchBarcode)

// DEBUG-ONLY ROUTES
// app.get("/fetch_null_product_data", ProductsHandler.getNullProductData)

// ******************************
// All your base are belong to us
// ******************************
app.listen(3210, () => {
  console.log(`running on port 3210`)
})
