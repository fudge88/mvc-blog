const renderDashboard = (req, res) => {
  res.render("dashboard");
};
const renderHome = (req, res) => {
  res.render("home");
};

module.exports = {
  renderDashboard,
  renderHome,
};
