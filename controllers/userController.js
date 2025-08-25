const User = require("../models/userModel");

// Add user
exports.addUser = async (req, res) => {
  try {
    const { id, name, email } = req.body;

    if (!id || !name || !email) {
      return res.status(400).json({ message: "All fields including id are required" });
    }

    const existingUser = await User.findById(id);
    if (existingUser) {
      return res.status(409).json({ message: "User with this ID already exists" });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    const user = await User.create({ _id: id, name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error adding user", error: error.message });
  }
};







// Get users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};





// Update user
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error: error.message });
  }
};






// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error: error.message });
  }
};
