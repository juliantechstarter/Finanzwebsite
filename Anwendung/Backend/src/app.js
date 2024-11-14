const express = require('express');
const transactionRoutes = require('./src/routes/transactions');
const connectDB = require('./config/db');

const app = express();

// Middleware: JSON body parser
app.use(express.json());

// Verbindet die DB mit AWS RDS
connectDB();

// Setzt die Routen
app.use('/transactions', transactionRoutes);

// Error Handler (optional, aber empfehlenswert)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Etwas ist schiefgelaufen!' });
});

module.exports = app;
