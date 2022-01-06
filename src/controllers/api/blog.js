const { logError } = require("../../utils/logger");

const { Blogs } = require("../../models/Blog");

const getAllBlogs = async (req, res) => {
  res.send("getAllBlogs");
};
const getBlogById = async (req, res) => {
  res.send("getBlogById");
};
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
  getAllBlogs,
  getBlogById,
  createNewBlog,
  updateBlog,
  deleteBlog,
};
