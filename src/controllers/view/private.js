const renderDashboard = (req, res) => {
  res.render("dashboard");
  // const userID = res.session.user.id;
};
const renderHome = (req, res) => {
  res.render("home");
};

module.exports = {
  renderDashboard,
  renderHome,
};
