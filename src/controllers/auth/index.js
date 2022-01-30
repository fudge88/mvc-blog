const bcrypt = require("bcrypt");

const { User } = require("../../models");
const { getPayloadWithValidFieldsOnly } = require("../../util");

const login = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["email", "password"],
      req.body
    );

    if (Object.keys(payload).length !== 2) {
      console.log(`[ERROR]: Failed to login user | Invalid fields`);
      return res.status(400).json({ success: false });
    }

    const user = await User.findOne({ where: { email: payload.email } });

    if (!user) {
      console.log(`[ERROR]: Failed to login user | User does not exist`);
      return res.status(404).json({ success: false });
    }

    const isValidPassword = await bcrypt.compare(
      payload.password,
      user.password
    );

    if (!isValidPassword) {
      console.log(`[ERROR]: Failed to login user | Invalid password`);
      return res.status(401).json({ success: false });
    }

    req.session.save(() => {
      req.session.isLoggedIn = true;
      req.session.user = {
        id: user.get("id"),
        username: user.get("username"),
      };

      return res.json({ success: true });
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

const signup = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["username", "email", "password"],
      req.body
    );

    if (Object.keys(payload).length !== 3) {
      console.log(`[ERROR]: Failed to create user | Invalid fields`);
      return res.status(400).json({ success: false });
    }

    await User.create(payload);

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

const logout = (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      return res.json({ success: true });
    });
  } else {
    return res.status(404).json({ success: false });
  }
};

module.exports = { login, logout, signup };
