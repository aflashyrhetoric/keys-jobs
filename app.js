import express from "express"
// import { getGenres } from "./lib/scraper"
// import db from "./lib/db"
// import "./lib/cron"
import { fetchZyteData } from "./src/zyte"

const app = express()

// app.get("/scrape", async (req, res, next) => {
//   console.log("Scraping!")
//   let genres = await getGenres(
//     "http://everynoise.com/everynoise1d.cgi?scope=all",
//   )
//   db.set("date", Date.now()).write()
//   db.set("genres", genres).write()
//   res.json(genres)
// })

app.get("/fetch_zyte_data", async (req, res, next) => {
  let data = await fetchZyteData()

  console.log(JSON.stringify(data, null, 2))
  // db.set('date', Date.now()).write();
  // db.set('genres', genres).write();
  res.json(data)
})

app.listen(3210, () => {
  console.log(`running on port 3210`)
})
