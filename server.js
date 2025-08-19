const express = require("express");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());

// Root Route
app.get("/", (req, res) => {
  res.send(" Library Management API - Use /books endpoint");
});



// Register Routes
app.use("/books", bookRoutes);
app.use("/users", userRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
