const express = require('express');
const { createTransaction, getAllTransactions } = require('../controllers/transactionController');

const router = express.Router();

// Route: Neue Transaktion erstellen
router.post('/', createTransaction);

// Route: Alle Transaktionen abrufen
router.get('/', getAllTransactions);

module.exports = router;
