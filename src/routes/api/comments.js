const { Router } = require("express");

const { createComment } = require("../../controllers/api/comments");

const router = Router();

router.post("/", createComment);

module.exports = router;
