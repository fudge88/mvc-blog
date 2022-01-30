const { logError } = require("../../utils/logger");

const createNewBlog = async (req, res) => {
  res.send("createNewBlog");
};
const updateBlog = async (req, res) => {
  res.send("updateBlog");
};
const deleteBlog = async (req, res) => {
  res.send("deleteBlog");
};

module.exports = {
  createNewBlog,
  updateBlog,
  deleteBlog,
};
