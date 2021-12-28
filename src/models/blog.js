const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

// blog class & schema
class Blogs extends Model {}

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
    unique: true,
    // references: {
    //   model: "users",
    //   key: "id",
    // },
  },
  blog_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  blog: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  timestamps: true,
  modelName: "blogs",
};

Blogs.init(schema, options);

module.exports = Blogs;
