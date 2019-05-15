var db = require("../models");
var passport = require("../config/passport/passport");
var request = require('request'); // for AJAX calls
var userAPi = require("../config/passport/passport"); 
var Sequelize= require("sequelize");

// **PASSPORT** middleware module
var isAuth = require("../config/passport/isAuth");

module.exports = function (app) {
  var userID;
  var userName;
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
  app.post("/api/sendTransRequest", function (req, res) {
    console.log(req.body);
    db.Transaction.create(req.body).then(function (Transaction) {
      // res.redirect(307, "/api/login");
      res.status(201).json(Transaction);
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });
  // if login successful redirect to home 
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // since the API call is doing post we set this /api/login call to redirect to the HOME page
    console.log("in the app.post login!");
    console.log(res.req.user.dataValues.id);
    const user = res.req.user.dataValues;
    userID = res.req.user.dataValues.id;
    userName= res.req.user.dataValues.username;
    console.log("firs usedrID:", userID );
    res.json(user);
    // res.json(res.req.user.User.dataValues);
    // res.json("/homes");
  });

  // Logout using .logout() method then redirect to login page.
  app.get("/api/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Get all transactions
  app.get("/api/findalluser", function(req, res) {
    // Finding all Users, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    //console.log("hitting the findall API route!: " , res);
    // console.log(res);
    db.User.findAll({}).then(function(results) {
      //console.log("this are the users: ", results);
      // results are available to us inside the .then
      res.json(results);
    });
  });
  app.get("/api/findalltran", function(req, res) {
    // Finding all Users, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    //console.log("hitting the findall API route!: " , res);
    // console.log(res);
    db.Transaction.findAll({}).then(function(results) {
     // console.log("this are the users: ", results);
      // results are available to us inside the .then
      res.json(results);
    });
  });

  app.get("/api/findalltransUser", function(req, res) {
    console.log("WE ARE HERE")
    // // Here we add an "include" property to our options in our findOne query
    // // We set the value to an array of the models we want to include in a left outer join
    // // In this case, just db.Author
    // // const userID = res.req.user.dataValues.id;
    // // console.lsog("firs usedrID:", userID );
    // //  console.log("this is the Userid fiortrasantion: ", userID);

      const Op =Sequelize.Op;

      db.Transaction.findAll({
        where: {
          
            [Op.or]: [{UserId: userID}, {User_Name_Providing_service: userName}]
         
      },
      // include: [db.Transaction]
    }).then(function(dbtransaction) {
      res.json(dbtransaction);
    });
  });
  

};
