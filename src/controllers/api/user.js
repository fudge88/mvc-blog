const { User } = require("../../models/Comment");

const createNewUser = async (req, res) => {
  res.send("createNewUser");
};
const userLogin = async (req, res) => {
  res.send("userLogin");
};
const userLogout = async (req, res) => {
  res.send("userLogout");
};

module.exports = {
  createNewUser,
  userLogin,
  userLogout,
};
