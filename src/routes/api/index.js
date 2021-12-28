const { Router } = require("express");

const blogRoutes = require("./blog-routes");
const commentRoutes = require("./comment-routes");

const router = Router();

router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
