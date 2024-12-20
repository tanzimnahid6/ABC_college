// controllers/userController.js
const User = require("../models/userModel");
const path = require("path");
// Create a new user
exports.createUser = async (req, res) => {
  const { name, subject, email, phone, address, dob, university } = req.body;
  const image = req.file;
  const newUser = {
    name,
    subject,
    email,
    phone,
    address,
    dob,
    university,
    image: image.filename,
  };

  try {
    const user = new User(newUser);
    const isAlreadyExist = await User.findOne({ email: user.email });
    if (isAlreadyExist) {
      return res.json({ success: false, message: "User already exist" });
    }
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single user
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get user by email
exports.getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//get image file by name
exports.getUserByImageName = async (req, res) => {
  try {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname,"..", "uploads", imageName); 
    res.sendFile(imagePath);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update a user by email
exports.updateUserByEmail = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// try {
//   const user = new User(req.body);
//   const isAlreadyExist = await User.findOne({ email: user.email });
//   if (isAlreadyExist) {
//     return res.json({ success: false, message: "User already exist" });
//   }
//   await user.save();
//   res.status(201).json(user);
// } catch (error) {
//   res.status(400).json({ message: error.message });
// }
