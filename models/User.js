const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "user",
    timestamps: false,
  }
);

module.exports = User;
