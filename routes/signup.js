let express = require('express');
let User = require("../models/user");
let router = express.Router();

router.get('/', (req, res, next) => {
  let names = ['Tony','Lisa','Micket'];
  let myobject = [];

  names.forEach((name) => {
      user = {
          username: name
      };
      myobject.push(user);
  });

  res.json(myobject);
});

//create a new account using a unique username
router.post("/", (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    if(username == null || username == "" || username == undefined) {
        res.send("undefined");
    } else {
        User.findOne({ username: username }, (err, result) => {
            if(err) throw err;
            else if(result == null) {
                let newuser = new User({
                    username: username,
                    password: password,
                    profile_photo_url: null,
                    country: "",
                    phone: 0,
                    online: true,
                    bio: "",
                    fullName: "",
                    homeTown: "",
                    authenticated: false,
                    account_status: 'Active',
                    active: true,
                    last_seen: Date.now(),
                    location: {
                        lat: 0,
                        lon: 0,
                        speed: 0,
                        altitude: 0
                    }
                });
                newuser.save((error, saved) => {
                    if(err) throw err;
                    else {
                        res.json({
                            ok: true,
                            data: saved
                        });
                    }
                })
            } else {
                res.json({
                    ok: false,
                    message: "The user exists, would you like to login?"
                })
            }
        })
    }

})

module.exports = router;
