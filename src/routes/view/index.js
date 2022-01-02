const { Router } = require("express");

const publicRoutes = require("./public-routes");
const privateRoutes = require("./private-routes");
const auth = require("../../middleware/auth");

const router = Router();

router.use(publicRoutes);
router.use(auth, privateRoutes);

module.exports = router;
