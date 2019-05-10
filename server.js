// MAIN SERVER FILE
const express = require('express');
const db = require("./models")


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ extended: false}));


// Test route for API
app.get('/', (req, res) => res.send('API Running!'));

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/transactions', require('./routes/api/transactions'));


db.sequelize.sync({ force: true }).then(function () {
    console.log("DB connected!");
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});

module.exports = app;
