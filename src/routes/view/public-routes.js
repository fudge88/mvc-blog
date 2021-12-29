const { Router } = require("express");

const {
  renderSignup,
  renderLogin,
  renderHome,
} = require("../../controllers/view/public");

const router = Router();

router.get("/signup", renderSignup);
router.get("/login", renderLogin);
router.get("/", renderHome);

module.export = router;
