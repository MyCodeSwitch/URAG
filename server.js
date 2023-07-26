const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the static files (including index.html)
app.use(express.static("public"));

// Database configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "Jing",
  password: "258258", 
  database: "URAG",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database!");
});

// Handle form submission
app.post("/submit", (req, res) => {
  const email = req.body.email;

  // Save the form data to the database
  const formData = {
    email: email,
  };

  db.query("INSERT INTO emails SET ?", formData, (err, result) => {
    if (err) {
      console.error("Error saving data to the database:", err);
      return res.send("Error submitting the form.");
    }
    console.log("Form data saved to the database!");
    res.send("Form submitted successfully!");
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
