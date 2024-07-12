const mongoose = require('mongoose')
connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then((res)=>{
    console.log("Style Guru Server connected with mongoDB");
}).catch((err)=>{
    console.log("DB connection failed!");
    console.log(err);
})