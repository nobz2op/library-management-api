const User = require("../models/userModel");


exports.addUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }
  const user = User.createUser(name, email);
  res.status(201).json(user);
};




exports.getUsers = (req, res) => {
  res.json(User.getAllUsers());
};




exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = User.updateUser(id, req.body);

  if (!updated) return res.status(404).json({ message: "User not found" });
  res.json(updated);
};




exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  User.deleteUser(id);
  res.json({ message: "User deleted" });
};
