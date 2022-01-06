const { logError } = require("../../utils/logger");
const Blog = require("../../models/Blog");

const renderSignup = (req, res) => {
  res.render("signup");
};
const renderLogin = (req, res) => {
  res.render("login");
};

const renderHome = async (req, res) => {
  try {
    const { loggedIn } = req.session;
    const allBlogs = await Blog.findAll();
    const blogs = allBlogs.map((blog) => {
      return blog.get({ plain: true });
    });
    console.log(blogs);
    res.render("home", { loggedIn, blogs });
  } catch (error) {
    logError("GET All Blogs", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  renderSignup,
  renderLogin,
  renderHome,
};
