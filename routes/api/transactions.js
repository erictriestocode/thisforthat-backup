const express = require('express');
const router = express.Router();

// GET for api/transaction
// transaction route
// Public access
router.get('/',(req,res) => res.send('transaction route Route'));

module.exports = router;