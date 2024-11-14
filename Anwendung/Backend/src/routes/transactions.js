const express = require('express');
const router = express.Router();

// Beispielroute
router.get('/', (req, res) => {
  res.send('Liste der Transaktionen');
});

module.exports = router;
