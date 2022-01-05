const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const connection = require("../config/connection");
const hashPassword = require("../hooks/hashPassword");

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
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 20],
    },
  },
};

const options = {
  sequelize: connection,
  modelName: "user",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
  hooks: {
    beforeCreate: hashPassword,
  },
};

class User extends Model {
  async checkPassword(userPassword) {
    const isValid = await bcrypt.compare(userPassword, this.password);
    return isValid;
  }
}

User.init(schema, options);

module.exports = User;
