const { Router } = require("express");

const blogs = require("./blogs");
const comments = require("./comments");

const router = Router();

router.use("/blogs", blogs);
router.use("/comments", comments);

module.exports = router;
