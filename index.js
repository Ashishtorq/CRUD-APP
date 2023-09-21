const express = require("express");
const app = express();
const User = require("./database");
const path = require("path");
const bodyParser = require("body-parser");
// const methodOverride = require('method-override');

//// app.set("view engine", "ejs");
////app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set 'views' directory for any views
// app.set("views", path.join(__dirname, "view"));
// app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const users = await Users.find({});
  res.render("index", {
    users: users,
  });
});

// Create Operation
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  if (!name || !email || !password)
    return res.status(404).send("wrong data bhai");

  const newuser = new User({ name, email, password });
  const usersave = await newuser.save();

  res.status(200).send("succesfully register");
  ////res.redirect("/");
});

app.get("/register", (req, res) => {
  res.send("register");
});
// Read Operation
app.get("/show/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById({ _id: id });
  if (user == null) {
    return res.status(404).send("sorry user do not exist");
  } else {
    res.status(200).send(user);
  }
});
//update operation
app.post("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const updateuser = await User.findByIdAndUpdate(
    { _id: id },
    { name, email, password },
    { new: true }
  );
  res.send("user updated");
});
// delete operation
app.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deleteuser = await User.findByIdAndDelete({ _id: id });
  res.status(200).send("user deleted");
});

app.listen(4500, () => {
  console.log("Server is running at port 4500");
});
