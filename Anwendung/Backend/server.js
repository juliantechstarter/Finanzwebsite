const express = require("express");
const dotenv = require("dotenv");
const app = require("./src/app"); // Importiere die Express-App

dotenv.config();

const PORT = process.env.PORT || 3000;

// Wir exportieren nur die App für die Tests, starten den Server jedoch nicht sofort
function startServer() {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

if (require.main === module) {
  // Wenn die Datei direkt ausgeführt wird, starten wir den Server
  startServer();
}

module.exports = { app, startServer }; // Exportiere die App und die Startfunktion
