const express = require("express");
const bodyParser = require("body-parser");
let items = ["Complete lecture", "Goto Jim", "Light weight baby"];
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let dayInfo = today.toLocaleDateString("us-en", options);
  res.render("list", { dayName: dayInfo, newTask: items });
});

app.get("/sample", function (req, res) {
  res.render("sample");
});

app.post("/", function (req, res) {
  let item = req.body.task;
  items.push(item);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server started at port 3000");
});
