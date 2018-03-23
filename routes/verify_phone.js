let express = require("express");
const accSID = "ACde883a08f510f0f061972c2751543e83";
const authToken = "a72f767555520f637937cd4507e42363";
let client = require("twilio")(accSID, authToken);
let router = express.Router();

router.post('/number_lookup', ensureToken, (req, res, next) => {
    let code = req.body.code;
    let phone = req.body.phone;

    let phonenumber = code + phone;


    client.messages.create({
        to: phonenumber,
        from: "+2540727321766",
        body: "Fuck niggas"
    }).then(() => {
        res.json({
            ok: true
        })
    }).catch((err) => {
        console.log(err);
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