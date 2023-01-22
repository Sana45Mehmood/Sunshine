 const mongoose = require('mongoose');

 var mongoURL = 'mongodb+srv://Sana:sana12345678@cluster0.nwd2rmo.mongodb.net/Sunshine'

 mongoose.connect(mongoURL , {useUnifiedtopology:true , useNewUrlParser:true})

 var db=mongoose.connection
 db.on('connected' ,()=>{
    console.log('Mongo DB connected successfully')
 })

 db.on('error' ,()=>{
    console.log('Mongo DB connection fail')
 })

 module.exports=mongoose