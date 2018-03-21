let express = require("express");
let User = require("../models/user");
let router = express.Router();

//update the user profile
router.post("/update_profile", (req, res, next) => {
    let id = req.body.id;
    let bio = req.body.bio;
    let fullName = req.body.fullName;

    User.findOneAndUpdate({ _id: id }, { $set: {
        bio: bio,
        fullName: fullName
    }}, { "new": true }, (err, result) => {
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