// import models
const Blogs = require("./blog");
const Comments = require("./comment");

// ASSOCIATIONS
// comments belong to blogs
Comments.belongsTo(Blogs, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

// blogs have many comments
Blogs.hasMany(Comments, {
  foreignKey: "blog_id",
});

module.exports = {
  Blogs,
  Comments,
};
