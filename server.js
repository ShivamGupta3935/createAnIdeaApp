//dependencies caling 
const express = require("express")
const configServer = require("./configs/server.config")


//starting server using method app.Listen 
app.listen(configServer.PORT,() => {
    console.log("server started")
})