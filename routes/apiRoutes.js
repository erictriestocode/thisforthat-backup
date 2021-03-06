var db = require("../models");
var passport = require("../config/passport/passport");
var request = require("request"); // for AJAX calls
var userAPi = require("../config/passport/passport");
var Sequelize = require("sequelize");

// **PASSPORT** middleware module
var isAuth = require("../config/passport/isAuth");

module.exports = function(app) {
  var userID;
  var userName;
  // Register
  app.post("/api/register", function(req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then(function(user) {
        res.status(201).json(user);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });
  app.post("/api/sendTransRequest", function(req, res) {
    console.log(req.body);
    db.Transaction.create(req.body)
      .then(function(Transaction) {
        res.status(201).json(Transaction);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });
  // if login successful redirect to home
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // since the API call is doing post we set this /api/login call to redirect to the HOME page
    console.log("in the app.post login!");
    console.log(res.req.user.dataValues.id);
    const user = res.req.user.dataValues;
    userID = res.req.user.dataValues.id;
    userName = res.req.user.dataValues.username;
    console.log("firs usedrID:", userID);
    res.json(user);
  });

  // Logout using .logout() method then redirect to login page.
  app.get("/api/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Get all transactions
  app.get("/api/findalluser", function(req, res) {
    db.User.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/signeduser", function(req, res) {
    db.User.findAll({
      where: {
        id: userID
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  //find all transaction by username or user id
  app.get("/api/findalltran", function(req, res) {
    db.Transaction.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/findalltransUser", function(req, res) {
    console.log("WE ARE HERE");
    const Op = Sequelize.Op;
    db.Transaction.findAll({
      where: {
        [Op.or]: [{ UserId: userID }, { User_Name_Providing_service: userName }]
      }
    }).then(function(dbtransaction) {
      const obj = {
        dbtransaction,
        userid: userID
      };

      res.json(obj);
    });
  });

  app.get("/api/findtrans/:id", function(req, res) {
    if (req.params.id) {
      db.Transaction.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
  });
};
