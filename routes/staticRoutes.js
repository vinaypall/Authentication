const express= require("express");
const router = express.Router();

router.get("/",async(req,res)=>{
  return res.render("home.ejs");
})

router.get("/signup",(req,res)=>{
    res.render("SignUp.ejs");
})

router.get("/login",(req,res)=>{
    res.render("login.ejs");
})

module.exports = router;