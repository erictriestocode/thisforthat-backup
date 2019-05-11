var db = require("../models");
var passport = require("../config/passport/passport");
var request = require('request'); // for AJAX calls

// **PASSPORT** middleware module
var isAuth = require("../config/passport/isAuth");

module.exports = function (app) {
  // Register
  app.post("/api/register", function (req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function (user) {
      // res.redirect(307, "/api/login");
      res.status(201).json(user);
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });

  // if login successful redirect to home 
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // since the API call is doing post we set this /api/login call to redirect to the HOME page
    res.json("/home");
  });

  // Logout using .logout() method then redirect to login page.
  app.get("/api/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
};