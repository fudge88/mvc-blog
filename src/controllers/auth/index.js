const { getPayloadWithValidFieldsOnly } = require("../../helpers");
const { User } = require("../../models");

const login = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["email", "password"],
      req.body
    );

    if (Object.keys(payload).length !== 2) {
      return res
        .status(400)
        .json({ success: false, error: "please complete all fields" });
    }

    const user = await User.findOne({ where: { email: payload.email } });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "User does not exist" });
    }

    const validPassword = await user.checkPassword(payload.password);

    if (!validPassword) {
      return res
        .status(401)
        .json({ success: false, error: "User Password incorrect" });
    }

    const userInSession = {
      id: user.get("id"),
      email: user.get("email"),
      username: user.get("username"),
    };

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = userInSession;

      return res.json({ success: true, data: "Login Successful" });
    });
  } catch (error) {
    console.log(`[ERROR]: Login user failed | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to login user" });
  }
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

    await User.create(payload);

    return res.json({ success: true, data: "Successfully created user" });
  } catch (error) {
    console.log(`[ERROR]: Create user failed | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create user" });
  }
};

const logout = (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      return res
        .status(204)
        .json({ success: true, data: "Successfully logged out" });
    });
  } else {
    return res.status(404).json({ success: false, error: "Failed to logout" });
  }
};

module.exports = {
  login,
  signup,
  logout,
};
