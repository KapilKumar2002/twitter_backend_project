const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CN_NAME,
  api_key: process.env.CN_API_KEY,
  api_secret: process.env.CN_API_KEY_SECRET,
});

module.exports = cloudinary;
