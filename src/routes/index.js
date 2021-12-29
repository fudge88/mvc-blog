const { Router } = require("express");

const api = require("./api");
const views = require("./view");
const auth = require("./auth");

const router = Router();

router.use("/api", api);
router.use("/auth", auth);
router.use("/", views);

module.exports = router;
