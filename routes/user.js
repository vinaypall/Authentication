const express = require("express");
const router = express.Router();
const {handleUserSignUp,handleLogin} = require("../controller/user");

router.post("/",handleUserSignUp);

router.post("/login",handleLogin);

module.exports = router;