const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Stelle sicher, dass deine DB-Konfiguration korrekt ist
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
  // Definiere die Spalten der Benutzertabelle
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Hash das Passwort vor dem Speichern
User.beforeCreate(async (user) => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10); // Hash das Passwort
  }
});

// Validierungsmethoden (falls notwendig)
User.prototype.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password); // Vergleiche das angegebene Passwort mit dem gespeicherten Hash
};

module.exports = User;
