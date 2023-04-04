const mongoose = require("mongoose");

var mongoURL='mongodb+srv://nikki:nikkishreya@cluster0.vlr8b.mongodb.net/mern-pizza'

mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected',()=>{
    console.log("monngodb connection successfull");
    } )

    db.on('error',()=>{
        console.log('mongodb connection failed')
    })

    module.exports=mongoose