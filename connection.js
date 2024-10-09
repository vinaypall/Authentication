const mongoose = require("mongoose");

async function connectToMogodb(url) {
    return mongoose.connect(url);
}

module.exports={
    connectToMogodb,
}