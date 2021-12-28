const { Comments } = require("../../models/Comment");

const getAllComments = async (req, res) => {
  res.send("getAllComments");
};
const getCommentById = async (req, res) => {
  res.send("getCommentById");
};
const createNewComment = async (req, res) => {
  res.send("createNewComment");
};
const updateComment = async (req, res) => {
  res.send("updateComment");
};
const deleteComment = async (req, res) => {
  res.send("deleteComment");
};

module.exports = {
  getAllComments,
  getCommentById,
  createNewComment,
  updateComment,
  deleteComment,
};
