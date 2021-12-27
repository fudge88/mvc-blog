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
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
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
  created_date: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
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
