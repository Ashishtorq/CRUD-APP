const express = require("express");
const app = express();
const User = require("./database");
const path = require("path");

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

app.listen(4500, () => {
  console.log("this is local host 4500");
});
