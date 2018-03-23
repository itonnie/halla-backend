var express = require('express');
let User = require("../models/user");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  let user = new User();
  user.sayHi("James", (data) => {
    console.log(data);
  })
});

router.get('/:username', ensureToken, (req, res, next) => {
  var username = req.params.username;

  User.findOne({ username: username }, (err, result) => {
    if(err)
      res.sendStatus(404);
    else if(result == null)
      res.sendStatus(404);
    else
      res.json({
        ok: true,
        data: result
      })
  })
})

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
