const User = require("../models/User");

const userData = [
  {
    username: "Blogger1",
    email: "blog1@email.com",
    password: "password1",
  },
  {
    username: "Blogger2",
    email: "blog2@email.com",
    password: "password2",
  },
  {
    username: "Blogger3",
    email: "blog3@email.com",
    password: "password3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
