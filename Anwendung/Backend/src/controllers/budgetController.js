const Budget = require("../models/Budget");

exports.createBudget = async (req, res) => {
  const { name, amount, userId } = req.body;

  try {
    const budget = await Budget.create({ name, amount, userId });
    res.status(201).json({ message: "Budget created", budget });
  } catch (error) {
    res.status(500).json({ error: "Failed to create budget" });
  }
};

exports.getBudgets = async (req, res) => {
  const { userId } = req.user;

  try {
    const budgets = await Budget.findAll({ where: { userId } });
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve budgets" });
  }
};
