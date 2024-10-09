const express = require("express");
const {connectToMogodb} = require("./connection");

const app = express();
const path  =  require("path");
const staticRoute = require("./routes/staticRoutes");
const userRoute = require("./routes/user");

app.use(express.urlencoded({ extended: false }));

//Connect to mongodb
connectToMogodb("mongodb://127.0.0.1:27017/Authentication")
.then(()=>{
    console.log("Mongodb connected successfully...") 
})

app.set("view-engine","ejs");
app.set("views",path.resolve("./views"));

//Routes
app.use("/",staticRoute);

app.use("/user",userRoute);



app.listen(3000 , ()=>{
    console.log(`Server Started Successfully..`);
});
