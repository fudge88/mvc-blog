const { Router } = require("express");
const router = Router();

const {
  createNewUser,
  userLogin,
  userLogout,
} = require("../../controllers/api/user");

router.get("/", createNewUser);

router.get("/login", userLogin);

router.get("/logout", userLogout);

module.exports = router;
