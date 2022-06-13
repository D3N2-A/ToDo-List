const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  var today = new Date();
  var day = today.getDay();

  if (day === 6 || day === 0) {
    res.send("<h1>Yay today is weekend! 🥳</h1>");
  } else {
    res.write("<h3>Boooooooo!!!</h3>");
    res.write("<h1>Today is a weekday 😥</h1>");
    req.send();
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server started at port 3000");
});
