const renderSignup = (req, res) => {
  res.render("signup");
};
const renderLogin = (req, res) => {
  res.render("login");
};
const renderHome = (req, res) => {
  const { loggedIn } = req.session;
  res.render("home", { loggedIn });
};

module.exports = {
  renderSignup,
  renderLogin,
  renderHome,
};
