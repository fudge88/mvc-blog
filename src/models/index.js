// import models
const Blogs = require("./blog");
const Comments = require("./comment");
const Users = require("./user");

// ASSOCIATIONS
// comments belong to blogs
Comments.belongsTo(Blogs, {
  // through: Comments,
  foreignKey: "blog_id",
});

// blogs have many comments
Blogs.hasMany(Comments, {
  foreignKey: "blog_id",
});

// comments belong to users
Comments.belongsTo(Users, {
  // through: Comments,
  foreignKey: "user_id",
});

// users have many comments
Users.hasMany(Comments, {
  foreignKey: "user_id",
});

// blogs belong to users
Blogs.belongsTo(Users, {
  // through: Blogs,
  foreignKey: "user_id",
});

// users have many blogs
Users.hasMany(Blogs, {
  foreignKey: "user_id",
});

module.exports = {
  Blogs,
  Comments,
  Users,
};
