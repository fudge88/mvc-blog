const { logError } = require("../../utils/logger");
const { Blog, User, Comment } = require("../../models/");
const session = require("express-session");

const renderSignup = (req, res) => {
  res.render("signup");
};
const renderLogin = (req, res) => {
  if (req.session.isLoggedIn) {
    return res.redirect("/dashboard");
  }
  return res.render("login");
};

const renderHome = async (req, res) => {
  try {
    const { loggedIn } = req.session;
    const allBlogs = await Blog.findAll({
      include: User,
    });
    const blogs = allBlogs.map((blog) => {
      return blog.get({ plain: true });
    });
    console.log(req.session);
    res.render("home", { loggedIn, blogs });
  } catch (error) {
    logError("GET All Blogs", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const renderBlog = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const blog = await Blog.findByPk(id, {
    include: [{ model: Comment, include: User }, { model: User }],
  });
  const blogData = blog.get({ plain: true });
  console.log(blogData);
};

module.exports = {
  renderSignup,
  renderLogin,
  renderHome,
  renderBlog,
};
