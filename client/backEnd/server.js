const express = require("express")
const cors = require("cors")
const axios = require("axios")

require("./config/db")
const mangaRoutes = require("./routes/mangaRoutes")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/manga", mangaRoutes)

// Image proxy — fetches blocked images server-side and sends them to browser
app.get("/proxy-image", async (req, res) => {
  const imageUrl = decodeURIComponent(req.query.url)
  try {
    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Referer": "https://myanimelist.net"
      }
    })
    const contentType = response.headers["content-type"] || "image/jpeg"
    res.setHeader("Content-Type", contentType)
    res.send(response.data)
  } catch (err) {
    console.error("Proxy image error:", err.message)
    res.status(500).send("Image fetch failed")
  }
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})