const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/usercrudapp')
.then(()=>{
    console.log("Connection Successfull")
})
.catch((e)=>{
    console.log(e);
})

const schema = new mongoose.Schema({
    name:string,
    email:string,
    password:string
})

const Usermodel = mongoose.model("User",Schema);


module.exports = Usermodel;