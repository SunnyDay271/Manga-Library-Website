const express = require("express")
const router = express.Router()
const db = require("../config/db")

const parseRow = (row) => ({
  ...row,
  genres: row.genres ? row.genres.split(",") : [],
})

// GET all manga
router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM manga ORDER BY views DESC",
    (err, results) => {
      if (err) return res.status(500).json({ error: "Database error" })
      res.json(results.map(parseRow))
    }
  )
})

// GET single manga by id
router.get("/:id", (req, res) => {
  db.query(
    "SELECT * FROM manga WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Database error" })
      if (results.length === 0)
        return res.status(404).json({ error: "Not found" })
      res.json(parseRow(results[0]))
    }
  )
})

// GET search manga by title
router.get("/search/:query", (req, res) => {
  db.query(
    "SELECT * FROM manga WHERE title LIKE ? ORDER BY views DESC",
    [`%${req.params.query}%`],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Database error" })
      res.json(results.map(parseRow))
    }
  )
})

module.exports = router