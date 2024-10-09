
const User = require("../models/user")

async function handleUserSignUp(req,res) {
    const { name,email,password } = req.body;
    
    await User.create({
        name,
        email,
        password
    });
    return res.redirect("/");
}
async function handleLogin(req,res) {
    const {email,password} = req.body;
    const user = await User.findOne({
        email,
        password
    });
    if(!user){
        return res.render("login.ejs",{
            error:"Invalid  or password"
        })
    }
    return res.redirect("/");
}

module.exports = {
    handleUserSignUp,
    handleLogin,
}