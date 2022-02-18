const { Comment } = require("../../models");
const { getPayloadWithValidFieldsOnly } = require("../../util");

const createComment = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["comment", "blogId"],
      req.body
    );

    if (Object.keys(payload).length !== 2) {
      console.log(`[ERROR]: Failed to create comment | Invalid fields`);
      return res.status(400).json({ success: false });
    }

    await Comment.create({ ...payload, userId: req.session.user.id });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create blog | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

module.exports = { createComment };
