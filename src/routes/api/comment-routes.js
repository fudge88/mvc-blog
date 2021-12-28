const { Router } = require("express");

const { Blogs, Comments } = require("../../models");

const {
  getAllComments,
  getCommentById,
  createNewComment,
  updateComment,
  deleteComment,
} = require("../../controllers/api/comment");

const router = Router();

router.get("/", getAllComments);

router.get("/:id", getCommentById);

router.post("/", createNewComment);

router.put("/:id", updateComment);

router.delete("/:id", deleteComment);

module.exports = router;
