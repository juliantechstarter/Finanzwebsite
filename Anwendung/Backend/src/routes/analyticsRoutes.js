const express = require("express");
const { fixedExpenses, availableFunds } = require("../controllers/analyticsController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/fixed-expenses", authMiddleware, fixedExpenses);
router.get("/available-funds", authMiddleware, availableFunds);

module.exports = router;
