const express = require("express");
const {connectToMogodb} = require("./connection");

const app = express();
const path  =  require("path");
const {myMiddleware} = require("./middleware/auth");
const staticRoute = require("./routes/staticRoutes");
const userRoute = require("./routes/user");
const cookieParser = require('cookie-parser');

//Connect to mongodb
connectToMogodb("mongodb://127.0.0.1:27017/Authentication")
.then(()=>{
    console.log("Mongodb connected successfully...") 
})

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view-engine","ejs");
app.set("views",path.resolve("./views"));

//Routes
app.use("/",staticRoute);
app.use("/user",userRoute);

//authnetication Routes using middleware
app.get("/test",myMiddleware,(req,res)=>{
    res.redirect("/");
})

app.listen(3000 , ()=>{
    console.log(`Server Started Successfully..`);
});

