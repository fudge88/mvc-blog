const Users = require("../models/User");

const userData = [
  {
    username: "Blogger1",
    user_email: "blog1@email.com",
    user_password: "password1",
  },
  {
    username: "Blogger2",
    user_email: "blog2@email.com",
    user_password: "password2",
  },
  {
    username: "Blogger3",
    user_email: "blog3@email.com",
    user_password: "password3",
  },
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;
