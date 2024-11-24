// src/app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const accountRoutes = require("./routes/accountRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const transactionRoutes = require('./routes/transactionRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/accounts", accountRoutes);
app.use("/budgets", budgetRoutes);
app.use("/analytics", analyticsRoutes);
app.use('/transactions', transactionRoutes);
app.use('/api/plaid', require('./routes/plaidRoutes'));

module.exports = app; // Exportiere die App für Tests und den Serverstart
