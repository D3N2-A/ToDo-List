const express = require("express");
const bodyParser = require("body-parser");
const getDate = require("./date.js");
const date = require(__dirname + "/date.js");
// let items = ["Complete lecture", "Goto Jim", "Light weight baby"];
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// <--------------------------------------------->

const itemSchema = new mongoose.Schema({
  content: String,
});

const Item = mongoose.model("Item", itemSchema);

const I1 = new Item({ content: "<-This is your ToDo List->" });

const I2 = new Item({ content: "Hit + button to add an Item" });

const I3 = new Item({ content: "<- Click this button to delete an Item" });

const dItems = [I1, I2, I3]; //default Items array

// <------------------------------------------->

app.get("/", function (req, res) {
  let dayInfo = getDate();

  Item.find({}, (err, result) => {
    if (result.length === 0) {
      Item.insertMany(dItems, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully added and Item");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", { dayName: dayInfo, newTask: result });
    }
  });
});

app.get("/sample", function (req, res) {
  res.render("sample");
});

app.post("/", function (req, res) {
  let newItem = req.body.task;
  const newTask = new Item({
    content: newItem,
  });
  newTask.save();
  dItems.push(newTask);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server started at port 3000");
});
