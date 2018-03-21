var express = require('express');
let Users = require("../models/user");
var router = express.Router();

router.get('/', function(req, res, next) {
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

module.exports = router;
