const { Blog } = require("../../models");
const { getPayloadWithValidFieldsOnly } = require("../../util");

const createBlog = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["title", "content", "blogImg"],
      req.body
    );

    if (Object.keys(payload).length !== 3) {
      console.log(`[ERROR]: Failed to create blog | Invalid fields`);
      return res.status(400).json({ success: false });
    }

    await Blog.create({ ...payload, userId: req.session.user.id });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create blog | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    await Blog.destroy({
      where: {
        id,
        userId: req.session.user.id,
      },
    });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete blog | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const payload = getPayloadWithValidFieldsOnly(
      ["title", "content"],
      req.body
    );

    if (Object.keys(payload).length !== 2) {
      console.log(`[ERROR]: Failed to update blog | Invalid fields`);
      return res.status(400).json({ success: false });
    }

    await Blog.update(payload, {
      where: {
        id,
        userId: req.session.user.id,
      },
    });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to update blog | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

module.exports = { createBlog, updateBlogById, deleteBlogById };
