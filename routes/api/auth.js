const express = require('express');
const router = express.Router();

// GET for api/authentication
// authentication route
// Public access
router.get('/',(req,res) => res.send('Authentication Route'));

module.exports = router;