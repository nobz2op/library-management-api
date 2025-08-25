require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
const authenticateToken = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());

// Routes with auth middleware applied at route-level
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
