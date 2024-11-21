const express = require("express");
const { addAccount, getAccounts } = require("../controllers/accountController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, addAccount);
router.get("/", authMiddleware, getAccounts);

module.exports = router;
