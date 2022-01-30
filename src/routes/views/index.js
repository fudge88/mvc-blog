const { Router } = require("express");

const {
  renderLogin,
  renderSignUp,
  renderDashboard,
  renderCreateBlog,
  renderBlogById,
  renderEditBlogById,
  renderHome,
  render404,
} = require("../../controllers/views");
const auth = require("../../middleware/auth");

const router = Router();

router.get("/login", renderLogin);
router.get("/sign-up", renderSignUp);

router.get("/dashboard", auth, renderDashboard);
router.get("/create-blog", auth, renderCreateBlog);
router.get("/blogs-edit/:id", auth, renderEditBlogById);

router.get("/blogs/:id", renderBlogById);
router.get("/", renderHome);
router.get("/*", render404);

module.exports = router;
