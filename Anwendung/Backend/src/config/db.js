const { Sequelize } = require('sequelize');

// Initialisierung von Sequelize mit Umgebungsvariablen
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Datenbankname
  process.env.DB_USER,       // Benutzername
  process.env.DB_PASSWORD,   // Passwort
  {
    host: process.env.DB_HOST,   // Hostname
    port: process.env.DB_PORT,   // Port
    dialect: process.env.DB_DIALECT || 'mysql', // Dialekt (standardmäßig MySQL)
    dialectOptions: {
      charset: 'utf8mb4',       // Charset
    },
    define: {
      charset: 'utf8mb4',       // Standard für Tabellen
      collate: 'utf8mb4_unicode_ci', // Kollation
    },
    logging: false,            // Deaktiviert SQL-Logs
  }
);

// Verbindung zur Datenbank herstellen
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('Verbindung zur Datenbank erfolgreich hergestellt.');
  } catch (error) {
    console.error('Fehler bei der Verbindung zur Datenbank:', error);
    throw error; // Fehler weiterwerfen, um fehlerhafte Verbindungen zu signalisieren
  }
}

module.exports = { sequelize, connectDB };
