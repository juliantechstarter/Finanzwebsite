const Account = require("../models/Account");

exports.addAccount = async (req, res) => {
  const { bankName, accountNumber, userId } = req.body;

  try {
    const account = await Account.create({ bankName, accountNumber, userId });
    res.status(201).json({ message: "Bank account added", account });
  } catch (error) {
    res.status(500).json({ error: "Failed to add bank account" });
  }
};

exports.getAccounts = async (req, res) => {
  const { userId } = req.user;

  try {
    const accounts = await Account.findAll({ where: { userId } });
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve accounts" });
  }
};
