const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/app/*", { target: "http://thisforthatapp.herokuapp.com/" }));
};