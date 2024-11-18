const express = require('express');
const transactionRoutes = require('./routes/transactions');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Routen
app.use('/transactions', transactionRoutes);

module.exports = app;
