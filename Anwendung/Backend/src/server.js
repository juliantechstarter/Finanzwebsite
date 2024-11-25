// src/server.js
const express = require('express');
const { sequelize } = require('./models');

const app = express();

// Middleware
app.use(express.json());

// Beispiel-Routen
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/accounts', require('./routes/accountRoutes'));
app.use('/api/budgets', require('./routes/budgetRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/plaid', require('./routes/plaidRoutes'));

// Exportiere die App für Tests
module.exports = app;

// Starte den Server nur, wenn die Umgebungsvariable nicht `test` ist
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, async () => {
    try {
      await sequelize.authenticate();
      console.log(`Server läuft auf Port ${PORT}`);
    } catch (error) {
      console.error('Fehler bei der Verbindung zur Datenbank:', error);
    }
  });
}
