const express = require("express");
const bodyParser = require("body-parser");
var items = [];
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var dayInfo = today.toLocaleDateString("us-en", options);
  res.render("list", { dayName: dayInfo, newTask: items });
});

app.post("/", function (req, res) {
  var item = req.body.task;
  items.push(item);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server started at port 3000");
});
