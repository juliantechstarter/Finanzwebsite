require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: console.log, // Debug-Logs aktivieren
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Verbindung zur Datenbank erfolgreich hergestellt.');
  } catch (error) {
    console.error('Fehler bei der Verbindung zur Datenbank:', error);
  }
};

module.exports = { sequelize, connectDB }; // Export von sequelize und connectDB
