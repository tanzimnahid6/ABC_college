const express = require("express");
const multer = require("multer");

const path = require("path");
const fs = require("fs");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail,
  updateUserByEmail,
  getUserByImageName,
  loginUser
} = require("../controllers/userController");
const router = express.Router();

const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
// Ensure the uploads directory exists
const upload = multer({ storage: storage });

router.post("/createUser", upload.single("image"), createUser);

router.get("/", getUsers);
router.get("/:email", getUserByEmail);
router.get("/image/:imageName", getUserByImageName);
router.get("/:id", getUserById);

router.put("/:id", updateUser);
router.put("/update/:email", updateUserByEmail);
router.delete("/:id", deleteUser);

module.exports = router;
