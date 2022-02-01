const Comment = require("../models/Comment");

const commentData = [
  {
    userId: 3,
    blogId: 2,
    comment: "This is a comment for blog 1",
  },
  {
    userId: 2,
    blogId: 2,
    comment: "This is a comment for blog 3",
  },
  {
    userId: 1,
    blogId: 3,
    comment: "This is a comment for blog 2",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
