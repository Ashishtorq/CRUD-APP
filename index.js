const express = require("express");
const app = express();
const User = require("./database");
const path = require("path");
const { escape } = require("querystring");

//// app.set("view engine", "ejs");
////app.use(express.static(path.join(__dirname, "public")));


// Set 'views' directory for any views
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index", {
    title: "This is index page",
    text: "This is homepage",
  });
});

app.post("/register", async(res,req)=>{
    const {name,email,password}=req.body;
    const newuser = new User({name,email,password});
    const usersave = await newuser.save();
    res.redirect("/");
})

app.get("/register",(req,res)=>{
    res.render("register")

})

app.listen(4500, () => {
    console.log("Server is running at port 4500");
});
