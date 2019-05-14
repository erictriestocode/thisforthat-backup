// The following code is based from 15 - supplemental folder
// Documentation at http://www.passportjs.org/docs/configure/
// Thank you Shelby for helping to find this!

// This module allows registered users to view a restricted location
exports.IsAuthenticated = function (req, res, next) {
  // If user was logged in and serialized from passport.js, user can view the page
  if (req.user) {
    return next();
  }

  // Otherwise return visitor to home page or maybe login?
  return res.redirect("/signinform");
};


exports.destroySession = function(req,res,next){
  req.logOut();
  req.session.destory();
  res.redirect("/");
}
