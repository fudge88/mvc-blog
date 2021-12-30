const { getPayloadWithValidFieldsOnly } = require("../../helpers");
const { User } = require("../../models");

const login = (req, res) => {
  res.render("login");
};

const signup = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["username", "email", "password"],
      req.body
    );
    if (Object.keys(payload).length !== 3) {
      return res
        .status(400)
        .json({ success: false, error: "please complete all fields" });
    }

    const user = await User.create(payload);

    return res.json({ success: true, data: user });
  } catch (error) {
    console.log(`[ERROR]: Create user failed | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create user" });
  }
};

const logout = (req, res) => {
  res.render("home");
};

module.exports = {
  login,
  signup,
  logout,
};
