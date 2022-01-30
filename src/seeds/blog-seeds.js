const Blog = require("../models/Blog");

const blogData = [
  {
    blogImg:
      "https://images.unsplash.com/photo-1518006158933-f03b3dbb5ef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdW50YWluJTIwdHJla3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "blog 1",
    content: "This is blog 1",
    userId: 3,
  },
  {
    blogImg:
      "https://images.unsplash.com/photo-1525856897812-33d00556e714?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdW50YWluJTIwdHJla3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "blog 2",
    content: "This is blog 2",
    userId: 2,
  },
  {
    blogImg:
      "https://images.unsplash.com/photo-1619456613769-1cd2c8f6ea90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdW50YWluJTIwdHJla3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "blog 3",
    content: "This is blog 3",
    userId: 1,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
