const mysql = require("mysql2")

const db = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "",
  database: "manga_library"

})

db.connect((err) => {

  if (err) {

    console.log(
      "Database connection failed:",
      err
    )

    return

  }

  console.log(
    "MySQL Connected"
  )

})

module.exports = db