const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPost,
  addPost,
  toggleLike,
  addComment,
  searchPost,
  getTags,
  toggleRetweet,
} = require("../controllers/post");
const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/fileHandler");

router.route("/tags").get(getTags);
router
  .route("/")
  .get(protect, getPosts)
  .post(protect, upload.array("files"), addPost);
router.route("/search").get(searchPost);
router.route("/:id").get(protect, getPost);
router.route("/:id/togglelike").get(protect, toggleLike);
router.route("/:id/toggleRetweet").get(protect, toggleRetweet);
router.route("/:id/comments").post(protect, addComment);

module.exports = router;
