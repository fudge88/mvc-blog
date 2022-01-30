const auth = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    console.log(
      `[INFO]: Non-logged in user trying to navigate to a protected route without logging in`
    );
    return res.redirect("/login");
  }

  next();
};

module.exports = auth;
