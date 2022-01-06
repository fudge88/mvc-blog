const { Router } = require("express");

const {
  renderBlog,
  renderSignup,
  renderLogin,
  renderHome,
} = require("../../controllers/view/public");

const router = Router();

router.get("/blog/:id", renderBlog);
router.get("/signup", renderSignup);
router.get("/login", renderLogin);
router.get("/", renderHome);

module.exports = router;
