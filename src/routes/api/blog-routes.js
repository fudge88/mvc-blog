const { Router } = require("express");

const {
  createNewBlog,
  updateBlog,
  deleteBlog,
} = require("../../controllers/api/blog");

const router = Router();

router.post("/", createNewBlog);

router.put("/:id", updateBlog);

router.delete("/:id", deleteBlog);

module.exports = router;
