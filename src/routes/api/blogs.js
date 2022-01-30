const { Router } = require("express");

const {
  createBlog,
  updateBlogById,
  deleteBlogById,
} = require("../../controllers/api/blogs");

const router = Router();

router.post("/", createBlog);
router.put("/:id", updateBlogById);
router.delete("/:id", deleteBlogById);

module.exports = router;
