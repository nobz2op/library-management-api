const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  _id: String,         // custom string ID
  name: { type: String, required: true },
  author: { type: String, required: true },
  pages: { type: Number, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
