const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// Lots of help from Brad Traversy and his tutorials on this one!

// POST for api/users
// registration route
// Public access
router.post('/', [
    check('name', 'Name is required!').not().isEmpty(),
    check('email', 'Please include a valid email!').isEmail(),
    check('password', 'Please Enter a password at least 6 characters long!').isLength({ min:6})
], (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    console.log(req.body); 
    res.send('User Route')
});

module.exports = router;