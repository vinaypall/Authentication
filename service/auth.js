const jwt = require("jsonwebtoken");
const secretKey = "W3lc0me@321";

function setUser(user) {
    console.log(user);
    const payload = {
        _id:user._id,
        email:user.email
    }
   return jwt.sign(payload,secretKey);
}

function getUser(token) {
    if(!token){
        return null;
    }
    try {
        return jwt.verify(token,secret);
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser
};