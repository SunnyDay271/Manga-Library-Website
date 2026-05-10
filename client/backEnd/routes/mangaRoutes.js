const express = require("express")

const router = express.Router()

// Dummy Manga Data
const manga = [

  {
    id: 1,
    title: "ONE PIECE LIVE API TEST",
    image:
      "https://cdn.myanimelist.net/images/manga/2/253146.jpg",
    genres: ["Action", "Adventure"],
  },

  {
    id: 2,
    title: "Jujutsu Kaisen",
    image:
      "https://cdn.myanimelist.net/images/manga/3/210341.jpg",
    genres: ["Action", "Supernatural"],
  },

  {
    id: 3,
    title: "Chainsaw Man",
    image:
      "https://cdn.myanimelist.net/images/manga/3/216464.jpg",
    genres: ["Action", "Horror"],
  },

]

// GET ALL MANGA
router.get("/", (req, res) => {

  res.json(manga)

})

module.exports = router