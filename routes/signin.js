let express = require("express");
let User = require("../models/user.js");
let jwt = require('jsonwebtoken');
let router = express.Router();

router.post('/', (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username, password: password }, (err, users) => {
    if(err) throw err;
    if(users == null)
      res.json({
        ok: true,
        errorMessage: "Wrong username and password combination."
      });
    else
      res.json({
        ok: true,
        token: "Here goes the token value"
      });
  });
});

module.exports = router;
