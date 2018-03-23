var express = require('express');
let Users = require("../models/user");
var router = express.Router();

router.get('/', ensureToken, (req, res, next) => {
  Users.find((err, result) => {
    if(err) throw err;
    else {
      res.json({
        ok: true,
        data: result
      })
    }
  })
});

function ensureToken(req, res, next) {
  var bearerHeader = req.headers["authorization"];

  if(typeof bearerHeader !== 'undefined' ) {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
  } else {
      res.sendStatus(403);
  }
}

module.exports = router;