const Transaction = require("../models/Transaction");

exports.fixedExpenses = async (req, res) => {
  const { userId } = req.user;

  try {
    const fixedExpenses = await Transaction.findAll({
      where: { userId, type: "fixed" },
    });

    const totalFixedExpenses = fixedExpenses.reduce((sum, expense) => sum + expense.amount, 0);

    res.json({ fixedExpenses, totalFixedExpenses });
  } catch (error) {
    res.status(500).json({ error: "Failed to calculate fixed expenses" });
  }
};

exports.availableFunds = async (req, res) => {
  const { userId } = req.user;

  try {
    const income = await Transaction.sum("amount", { where: { userId, type: "income" } });
    const totalFixedExpenses = await Transaction.sum("amount", { where: { userId, type: "fixed" } });

    const availableFunds = income - totalFixedExpenses;

    res.json({ availableFunds });
  } catch (error) {
    res.status(500).json({ error: "Failed to calculate available funds" });
  }
};
