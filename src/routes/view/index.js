const { Router } = require("express");

const publicRoutes = require("./public-routes");
const privateRoutes = require("./private-routes");

const router = Router();

router.get(publicRoutes);
router.get(privateRoutes);

module.export = router;
