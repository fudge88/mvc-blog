const Blog = require("../models/Blog");

const blogData = [
  {
    user_id: 3,
    image:
      "https://images.unsplash.com/photo-1518006158933-f03b3dbb5ef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdW50YWluJTIwdHJla3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "blog 1",
    blog: "This is blog 1",
  },
  {
    user_id: 2,
    image:
      "https://images.unsplash.com/photo-1525856897812-33d00556e714?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdW50YWluJTIwdHJla3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "blog 2",
    blog: "This is blog 2",
  },
  {
    user_id: 1,
    image:
      "https://images.unsplash.com/photo-1619456613769-1cd2c8f6ea90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdW50YWluJTIwdHJla3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "blog 3",
    blog: "This is blog 3",
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
