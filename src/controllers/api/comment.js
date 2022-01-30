const { logError } = require("../../utils/logger");

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
  createNewComment,
  updateComment,
  deleteComment,
};
