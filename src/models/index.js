// import models
const Blog = require("./blog");
const Comment = require("./comment");
const User = require("./user");

// ASSOCIATIONS
// comments belong to blogs
Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

// blogs have many comments
Blog.hasMany(Comment, {
  foreignKey: "blog_id",
});

// comments belong to users
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// users have many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// blogs belong to users
Blog.belongsTo(User, {
  foreignKey: "user_id",
});

// users have many blogs
User.hasMany(Blog, {
  foreignKey: "user_id",
});

module.exports = {
  Blog,
  Comment,
  User,
};
