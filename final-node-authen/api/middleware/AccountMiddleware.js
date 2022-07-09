const jwt = require('jsonwebtoken')
var { expressjwt: jwtValidator } = require("express-jwt");
const privateKey = "thuhadaywertyuioghjhhjhhjjjj";

const verifyToken = jwtValidator({
    secret: privateKey,
    algorithms: ["HS256"],
});

let isAdmin = (req, res, next) => {
    console.log(req.auth);
    if (req.auth && req.auth.role === 'admin') {
        return next();
    }
    res.json({
        error: "You don’t have permission to access request page."
    })
}

module.exports = { verifyToken, isAdmin }