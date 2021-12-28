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
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // references: {
    //   model: "users",
    //   key: "id",
    // },
  },
  blog_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // references: {
    //   model: "blogs",
    //   key: "id",
    // },
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

  modelName: "comments",
};

Comments.init(schema, options);

module.exports = Comments;
