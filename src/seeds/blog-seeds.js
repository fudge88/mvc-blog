const Blogs = require("../models/Blog");

const blogData = [
  {
    user_id: 1,
    blog_title: "blog 1",
    blog: "This is blog 1",
  },
  {
    user_id: 2,
    blog_title: "blog 2",
    blog: "This is blog 2",
  },
  {
    user_id: 3,
    blog_title: "blog 3",
    blog: "This is blog 3",
  },
];

const seedBlogs = () => Blogs.bulkCreate(blogData);

module.exports = seedBlogs;
