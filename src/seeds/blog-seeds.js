const Blog = require("../models/Blog");

const blogData = [
  {
    user_id: 3,
    title: "blog 1",
    blog: "This is blog 1",
  },
  {
    user_id: 2,
    title: "blog 2",
    blog: "This is blog 2",
  },
  {
    user_id: 1,
    title: "blog 3",
    blog: "This is blog 3",
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
