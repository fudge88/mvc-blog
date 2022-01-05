const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

// comment class & schema
class Comment extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "user",
      key: "id",
    },
  },
  blog_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "blog",
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
  timestamps: true,
  underscored: true,
  modelName: "comment",
};

Comment.init(schema, options);

module.exports = Comment;
