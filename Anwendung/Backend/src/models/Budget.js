const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Budget = sequelize.define("Budget", {
  name: { type: DataTypes.STRING, allowNull: false },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Budget;
