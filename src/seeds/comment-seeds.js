const Comments = require("../models/Comment");

const commentData = [
  {
    user_id: 3,
    blog_id: 2,
    comment: "This is a comment for blog 1",
  },
  {
    user_id: 2,
    blog_id: 2,
    comment: "This is a comment for blog 3",
  },
  {
    user_id: 1,
    blog_id: 3,
    comment: "This is a comment for blog 2",
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
