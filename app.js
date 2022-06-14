const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = today.getDay();
  var dayName = days[day];

  if (day === 6 || day === 0) {
  } else {
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server started at port 3000");
});
