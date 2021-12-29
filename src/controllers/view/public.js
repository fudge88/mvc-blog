const renderSignup = (req, res) => {
  res.send("renderSignup");
};
const renderLogin = (req, res) => {
  res.send("renderLogin");
};
const renderHome = (req, res) => {
  res.send("renderHome");
};

module.exports = {
  renderSignup,
  renderLogin,
  renderHome,
};
