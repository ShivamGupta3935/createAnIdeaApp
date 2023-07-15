const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:10,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true,
        default:"CUSTOMER",
        enum:["ADMIN","CUSTOMER"]
    }
},{timestamps:true})

module.exports =  mongoose.model("Users",userSchema);
