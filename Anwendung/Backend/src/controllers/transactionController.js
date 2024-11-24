const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
const Transaction = require('../models/Transaction');
const dotenv = require('dotenv');

dotenv.config();

// Plaid-Konfiguration
const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV || 'sandbox'],
  baseOptions: {
    headers: {
      Authorization: `Bearer ${process.env.PLAID_ACCESS_TOKEN}`,
    },
  },
});

const plaidClient = new PlaidApi(configuration);

// Plaid-Transaktionen abrufen und speichern
exports.syncTransactions = async (req, res) => {
  const { accessToken, startDate, endDate } = req.body; // Access Token von Plaid, Zeitrahmen

  try {
    // Plaid API - Transaktionen abrufen
    const response = await plaidClient.transactionsGet({
      access_token: accessToken,
      start_date: startDate,
      end_date: endDate,
    });

    const plaidTransactions = response.data.transactions;

    // Transaktionen in die Datenbank speichern
    const savedTransactions = await Promise.all(
      plaidTransactions.map((tx) =>
        Transaction.create({
          userId: req.user.id, // Angenommen, der Benutzer ist authentifiziert
          plaidTransactionId: tx.transaction_id,
          name: tx.name,
          amount: tx.amount,
          date: tx.date,
          category: tx.category?.[0] || 'Uncategorized',
          type: tx.transaction_type,
        })
      )
    );

    res.status(201).json({ message: 'Transactions synced successfully', savedTransactions });
  } catch (error) {
    console.error('Error syncing transactions:', error);
    res.status(500).json({ error: 'Failed to sync transactions from Plaid' });
  }
};

// Alle gespeicherten Transaktionen abrufen
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      where: { userId: req.user.id },
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve transactions' });
  }
};

// Einzelne Transaktion erstellen (falls lokal hinzugefügt werden soll)
exports.createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create({
      ...req.body,
      userId: req.user.id,
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};
