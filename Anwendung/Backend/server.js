const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/authRoutes');  // Authentifizierungsrouten importieren
const { connectDB } = require('./src/config/db');  // Datenbankverbindung importieren

dotenv.config();  // .env-Datei einladen

const app = express();

// Middleware
app.use(cors());  // Cross-Origin Resource Sharing erlauben
app.use(bodyParser.json());  // JSON-Body-Parsing erlauben

// Authentifizierungsrouten einbinden
app.use('/api/auth', authRoutes);

// Start des Servers
const PORT = process.env.PORT || 3000;

// Verbindung zur Datenbank herstellen und Server starten
(async () => {
  try {
    await connectDB();  // Datenbankverbindung herstellen
    console.log('Datenbankverbindung erfolgreich hergestellt.');

    app.listen(PORT, () => {
      console.log(`Server läuft auf Port ${PORT}`);
    });
  } catch (error) {
    console.error('Fehler beim Starten des Servers:', error.message);
  }
})();
