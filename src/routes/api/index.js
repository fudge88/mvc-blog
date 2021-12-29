const { Router } = require("express");

const blogRoutes = require("./blog-routes");
const commentRoutes = require("./comment-routes");

const router = Router();

router.get("/blogs", blogRoutes);
router.get("/comments", commentRoutes);

module.exports = router;
