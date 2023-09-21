const express = require('express');
const app = express();
const User = require("./database");




app.listen(4500,()=>{console.log("this is local host 4500")})