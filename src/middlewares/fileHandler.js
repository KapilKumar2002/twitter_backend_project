const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cn_db");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "posts", // Specify a folder in Cloudinary
    allowed_formats: ["jpg", "png", "jpeg", "gif"], // Allowed file types
    transformation: [
      { fetch_format: "auto", quality: "auto" }, // Optimize delivery
    ],
  },
});

const upload = multer({ storage });

module.exports = upload;
