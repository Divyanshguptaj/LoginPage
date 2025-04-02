const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Connected Successfully");
    })
    .catch((err)=>{
        console.log("Connection failed");
        console.log(err);
        process.exit(1);
    })
}