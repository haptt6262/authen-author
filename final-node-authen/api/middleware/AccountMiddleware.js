const jwt = require('jsonwebtoken')
var { expressjwt: jwtValidator } = require("express-jwt");
const privateKey = "thuhadaywertyuioghjhhjhhjjjj";

const verifyToken = jwtValidator({
    secret: privateKey,
    algorithms: ["HS256"],
    getToken: function fromHeader(req) {
        if (
            req.headers.authorization &&
            req.headers.authorization.split(" ")[0] === "Bearer"
        ) {
            console.log("token received: ", req.headers.authorization.split(" ")[1])
            return req.headers.authorization.split(" ")[1];
        }
        return null;
    }
})
let isAdmin = (req, res, next) => {
    // console.log("role: ", req.auth);
    if (req.auth && req.auth.role === 'admin') {
        return next();
    }
    res.json({
        error: "You don’t have permission to access request page."
    })
}

module.exports = { verifyToken, isAdmin }