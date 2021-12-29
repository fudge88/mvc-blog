const login = (req, res) => {
  res.send("login");
};

const signup = (req, res) => {
  res.send("signup");
};

const logout = (req, res) => {
  res.send("logout");
};

module.exports = {
  login,
  signup,
  logout,
};
