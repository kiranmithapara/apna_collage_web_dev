const express = require("express");

const app = express();

const port = 8080;

app.set("view engine", "ejs"); //ejs ee express ni andar avi jay etle ene require karvani jarur natho
//ejs use karvana che ee express ne batava mate

const path = require("path");
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.set("views", path.join(__dirname, "views"));

//ejs file ne hamesha views name na folder ma banavi
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/rolldice", (req, res) => {
  const diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { val: diceVal });
});

const instaData = require("./data.json");
app.get("/ig/:username", (req, res) => {
  const { username } = req.params;
  let data = instaData[username];
  if (data) {
    res.render("insta", { data });
  } else {
    res.render("error");
  }
  //   console.log(data);
});
// app.get("/ig/:user", (req, res) => {
//   const followers = ["lalit", "vansh", "jaydeep", "hardik"];
//   console.log(instaData);

//   const { user } = req.params;
//   res.render("insta", { user, followers, instaData });
// });

app.listen(port, () => {
  console.log("listening on port" + port);
});
