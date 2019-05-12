require("dotenv").config();
var express = require("express");
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

// ****** PASSPORT CONFIG ******************
var passport = require("./config/passport/passport");
// ****** END PASSPORT CONFIG **************

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 5000;

// ****** EXPRESS-SESSION & PASSPORT ******************
// use sessions to keep track of user's login status
app.use(session({ secret: "robot author", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });
// ****** END EXPRESS-SESSION & PASSPORT **************

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public/html"));

// Routes
require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app); not needed
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// if set to true the tables gets dropped and created
var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

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
