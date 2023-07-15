//dependencies caling 
const express = require("express")
//using the method of express 
const configServer = require("./configs/server.config")
const mongoose = require('mongoose')
const db_config = require("./configs/db.config")
const userModel = require("./models/user.model.js")

const app = express();

mongoose.connect(db_config.DB_URL);
const db = mongoose.connection;

////if db connection is fail 
db.on("error",()=>{
    console.log("db connected failed")
})

//if connected to db successfully
db.once("open",()=>{
    console.log("db connected successfully")

    init();
})
async function init() {
    /**
     * initialize the mongodb
     * need to create the Admin user
     */
    const admin = await userModel.create({
      name: "shivam gupta",
      userId: "shi123",
      email: "shivamguptaabcd@gmail.com",
      password: "wwelcome123",
      userType: "ADMIN"
    });
    console.log(admin);
  }
  

//starting server using method app.Listen 
app.listen(configServer.PORT,() => {
    console.log("server started")
})