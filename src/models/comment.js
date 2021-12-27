const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

// comment class & schema
class Comments extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  blog_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "blogs",
      key: "id",
    },
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "comment",
};

Comments.init(schema, options);

module.exports = Comments;
