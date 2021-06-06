const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = [];
const workItems = [];

app.set("view engine", "ejs");
// this is for ejs

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  const day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });
});

// app.post("/", function (req, res) {
//   const item = req.body.newItem;

//   if (req.body.list === "Work List") {
//     workItems.push(item);
//     res.redirect("/work");
//   } else {
//     items.push(item);
//     res.redirect("/");
//   }
// });

app.post("/", function (req, res) {
  const item = req.body.newItem;

  items.push(item);
  res.redirect("/");
});

// rewrote app.post with only root directory and only pushing new items to root directory
// assuming /work doesn't exist, as

// app.get("/work", function (req, res) {
//   res.render("list", { listTitle: "Work List", newListItems: workItems });
// });

// app.post("/work", function (req, res) {
//   let item = req.body.newItem;
//   workItems.push(item);
//   req.redirect("/work");
// });

// app.get("/about", function (req, res) {
//   res.render("about");
// });

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 3000;
// }

app.listen(process.env.PORT || 3000, function () {
  console.log("Server has started successfully.");
});
