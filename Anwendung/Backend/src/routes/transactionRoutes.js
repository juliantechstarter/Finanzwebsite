const express = require('express');
const { syncTransactions, getAllTransactions, createTransaction } = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware'); // Angenommen, ein Auth-Middleware ist vorhanden

const router = express.Router();

router.post('/sync', authMiddleware, syncTransactions); // Plaid-Sync
router.get('/', authMiddleware, getAllTransactions);    // Alle Transaktionen abrufen
router.post('/', authMiddleware, createTransaction);    // Neue Transaktion hinzufügen

module.exports = router;
