require("dotenv").config();
var express = require("express");
var passport = require('passport');
var session = require('express-session');
var passportConfig = require('./config/passport/passport');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var cors = require('cors');

// ****** PASSPORT CONFIG ******************
var passport = require("./config/passport/passport");
// ****** END PASSPORT CONFIG **************

// **** DB MODELS ****
var db = require("./models");
// *******

var app = express();
var PORT = process.env.PORT || 5000;

// ****** EXPRESS-SESSION & PASSPORT ******************
// use sessions to keep track of user's login status
app.use(session({ secret: "wewillsaveallofyourtime!", resave: true, saveUninitialized: true })); //ENV variable in heroku
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
//  });
// ****** END EXPRESS-SESSION & PASSPORT **************

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser());
// app.use(cookieParser());
app.use(express.json());
app.use(express.static(__dirname + "/public/"));


// if set to true the tables gets dropped and created
var syncOptions = { force: false };

// HEROKU
if (process.env.NODE_ENV === ' production'){
  app.use(express.static('client/build'));
}
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

module.exports = app;
