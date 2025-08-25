const jwt = require("jsonwebtoken");
require("dotenv").config();

const payload = { role: "admin" };
const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

console.log("Your token:", token);
