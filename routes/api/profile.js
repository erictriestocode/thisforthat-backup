const express = require('express');
const router = express.Router();

// GET for api/profile
// profile route
// Public access
router.get('/',(req,res) => res.send('profile Route'));

module.exports = router;