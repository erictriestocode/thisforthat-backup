require('dotenv').config()
const express = require("express");
// const passport = require('passport');
const session = require('express-session');
// const passportConfig = require('./config/passport/passport');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

// ****** PASSPORT CONFIG ******************
const passport = require("./config/passport/passport");
// ****** END PASSPORT CONFIG **************

// **** DB MODELS ****
const db = require("./models");
// *******

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: false }));
// HEROKU
if (process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
}
app.use(bodyParser());
// app.use(cookieParser());
app.use(express.json());
app.use(express.static(__dirname + "/public/"));

// ****** EXPRESS-SESSION & PASSPORT ******************
// use sessions to keep track of user's login status
app.use(session({ secret: "wewillsaveallofyourtime!", resave: true, saveUninitialized: true })); //ENV constiable in heroku
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });
// ****** END EXPRESS-SESSION & PASSPORT **************


// if set to true the tables gets dropped and created
const syncOptions = { force: true };


// Routes
require("./routes/apiRoutes")(app);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', "./client/public/index.html"));
});

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  console.log("DB Fired!");
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

// module.exports = app;
