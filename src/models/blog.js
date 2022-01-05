const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

// blog class & schema
class Blog extends Model {}

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
  title: {
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
  modelName: "blog",
};

Blog.init(schema, options);

module.exports = Blog;
