const { getUser }= require("../service/auth");
const myMiddleware = (req, res, next) => {
    const userUid = req.cookies.uid;
    console.log('Middleware executed!');
    if (!userUid) {
        return res.redirect("/login"); // Redirect to login if not logged in
    }
    const user = getUser(userUid);
    if (!user) {
        return res.redirect("/login"); // Redirect if user not found
    }
    req.user = user;
    // You can perform operations like logging, authentication, etc. here
    next(); // Call next() to proceed to the next middleware or route handler
};

module.exports = {
    myMiddleware,
}