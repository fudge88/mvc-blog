const { Router } = require("express");

const {
  createNewComment,
  updateComment,
  deleteComment,
} = require("../../controllers/api/comment");

const router = Router();

router.post("/", createNewComment);

router.put("/:id", updateComment);

router.delete("/:id", deleteComment);

module.exports = router;
