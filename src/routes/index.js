const { Router } = require("express");

const api = require("./api");
const auth = require("./auth");
const views = require("./views");

const router = Router();

router.use("/api", api);
router.use("/auth", auth);
router.use("/", views);

module.exports = router;
