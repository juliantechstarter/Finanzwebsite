const express = require('express');
const transactionRoutes = require('./routes/transactions');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

connectDB();

app.use('/transactions', transactionRoutes);

module.exports = app;