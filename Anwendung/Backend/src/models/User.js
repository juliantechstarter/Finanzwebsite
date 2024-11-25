// src/models/User.js
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
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

  // Hash das Passwort vor dem Speichern (bei Create)
  User.beforeCreate(async (user) => {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10); // Hash das Passwort
    }
  });

  // Hash das Passwort vor dem Speichern (bei Update)
  User.beforeUpdate(async (user) => {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, 10); // Hash das Passwort, wenn es geändert wird
    }
  });

  // Validierungsmethode, um Passwörter zu vergleichen
  User.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password); // Vergleiche das angegebene Passwort mit dem gespeicherten Hash
  };

  // Optionale Assoziationen
  User.associate = (models) => {
    // Beispiel für eine Assoziation, falls nötig:
    // User.hasMany(models.Transaction);
    // User.hasMany(models.Budget);
  };

  return User;
};
