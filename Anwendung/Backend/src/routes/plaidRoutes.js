const express = require('express');
const {
  createLinkToken,
  exchangePublicToken,
  getTransactions,
} = require('../controllers/plaidController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/link-token', authMiddleware, createLinkToken);
router.post('/exchange-token', authMiddleware, exchangePublicToken);
router.post('/transactions', authMiddleware, getTransactions);

module.exports = router;
