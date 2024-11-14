// config/db.js
const { Sequelize } = require('sequelize');

// Erstelle eine Instanz von Sequelize für MySQL
const sequelize = new Sequelize(
  process.env.DB_NAME,      // DB Name
  process.env.DB_USER,      // DB Benutzer
  process.env.DB_PASSWORD,  // DB Passwort
  {
    host: process.env.DB_HOST,    // DB Host (RDS Endpoint)
    dialect: 'mysql',             // Datenbanktyp
    logging: false,               // Verhindert, dass Sequelize SQL Queries in der Konsole ausgibt
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL Verbindung erfolgreich');
  } catch (error) {
    console.error('Fehler bei der DB-Verbindung:', error);
    process.exit(1); // Prozess mit einem Fehlerstatus beenden
  }
};

module.exports = connectDB;
