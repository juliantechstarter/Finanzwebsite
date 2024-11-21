const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Transaction = sequelize.define("Transaction", {
  description: { type: DataTypes.STRING, allowNull: false },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  type: { type: DataTypes.ENUM("income", "fixed", "variable"), allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Transaction;
