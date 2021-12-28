const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

class Users extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 20],
    },
  },
};

const options = {
  sequelize: connection,
  modelName: "users",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
};

Users.init(schema, options);

module.exports = Users;
