const renderDashboard = (req, res) => {
  res.render("dashboard");
  // const userID = res.session.user.id;
};

module.exports = {
  renderDashboard,
  renderHome,
};
