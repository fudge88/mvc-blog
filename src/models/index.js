const User = require("./user");
const Blog = require("./blog");
const Comment = require("./comment");

Blog.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(Blog, {
  foreignKey: "userId",
});

Comment.belongsTo(Blog, {
  foreignKey: "blogId",
  onDelete: "CASCADE",
});

Blog.hasMany(Comment, {
  foreignKey: "blogId",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(Comment, {
  foreignKey: "userId",
});

module.exports = { User, Blog, Comment };
