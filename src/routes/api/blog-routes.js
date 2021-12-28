const { Router } = require("express");

const { Blogs, Comments, Users } = require("../../models");

const {
  getAllBlogs,
  getBlogById,
  createNewBlog,
  updateBlog,
  deleteBlog,
} = require("../../controllers/api/blog");

const router = Router();

router.get("/", getAllBlogs);

router.get("/:id", getBlogById);

router.post("/", createNewBlog);

router.put("/:id", updateBlog);

router.delete("/:id", deleteBlog);

module.exports = router;
