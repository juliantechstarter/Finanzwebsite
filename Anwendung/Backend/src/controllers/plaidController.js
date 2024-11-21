const plaidClient = require('../config/plaidClient');

exports.createLinkToken = async (req, res) => {
  try {
    const response = await plaidClient.linkTokenCreate({
      user: { client_user_id: req.user.id.toString() },
      client_name: 'Finance Planner App',
      products: ['auth', 'transactions'],
      country_codes: ['US'],
      language: 'en',
    });

    res.json({ link_token: response.data.link_token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create Plaid link token' });
  }
};

exports.exchangePublicToken = async (req, res) => {
  const { public_token } = req.body;

  try {
    const response = await plaidClient.itemPublicTokenExchange({ public_token });
    const { access_token } = response.data;

    // Save access_token securely (e.g., in the database linked to the user)
    // Example: save to req.user object in your database
    res.json({ access_token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to exchange public token' });
  }
};

exports.getTransactions = async (req, res) => {
  const { access_token } = req.body; // Retrieve securely from the database

  try {
    const response = await plaidClient.transactionsGet({
      access_token,
      start_date: '2023-01-01',
      end_date: '2023-12-31',
    });

    res.json({ transactions: response.data.transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};
