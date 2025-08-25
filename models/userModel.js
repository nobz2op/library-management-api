const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: String,          // Custom string ID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
