const express = require('express');
const app = express();
const User = require("./database");



app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.send("This is working")
})


app.listen(4500,()=>{console.log("this is local host 4500")})