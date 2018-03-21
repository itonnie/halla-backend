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
        ok: false,
        errorMessage: "Wrong username and password combination."
      });
    else
      var user = { username: username, password: password };
      let token = jwt.sign(user, 'tonniewanjohi');
      res.json({
        ok: true,
        token: token,
        data: {
          id: users._id,
          bio: users.bio,
          fullName: users.fullName,
          username: users.username
        }
      });
  });
});

module.exports = router;
