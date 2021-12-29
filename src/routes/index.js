const { Router } = require("express");

const api = require("./api");
const view = require("./view");
const auth = require("./auth");

const router = Router();

router.get("/api", api);
router.get("/", view);
router.get("/auth", auth);

module.exports = router;
