const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Account = sequelize.define("Account", {
  bankName: { type: DataTypes.STRING, allowNull: false },
  accountNumber: { type: DataTypes.STRING, allowNull: false, unique: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Account;
