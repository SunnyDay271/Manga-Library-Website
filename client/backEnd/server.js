const express = require("express")
const cors = require("cors")

require("./config/db")

const mangaRoutes =
  require("./routes/mangaRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/manga", mangaRoutes)

app.listen(5000, () => {

  console.log(
    "Server running on port 5000"
  )

})