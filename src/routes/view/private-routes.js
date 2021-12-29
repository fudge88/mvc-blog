const { Router } = require("express");

const {
  renderDashboard,
  renderHome,
} = require("../../controllers/view/private");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/", renderHome);

module.exports = router;
