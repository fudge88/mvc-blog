const renderSignup = (req, res) => {
  res.render("signup");
};
const renderLogin = (req, res) => {
  res.render("login");
};
const renderHome = (req, res) => {
  res.render("home");
};

module.exports = {
  renderSignup,
  renderLogin,
  renderHome,
};
