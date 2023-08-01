//const exp = require("constants");
//const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const body_parser = require("body-parser");
const PORT = process.env.port || 3500;

//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.use(
  body_parser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  //res.send("hi divya");
  res.sendFile(path.join(__dirname, "Create", "create.html"));
  // res.sendFile(path.join(__dirname,''))
});
app.post("/adduser", (req, res) => {
  var names = req.body.names;
  var experience = req.body.experience;
  var doj = req.body.doj;
  var obj = {};
  var key = req.body.id;
  var newuser = {
    names: names,
    experience: experience,
    doj: doj,
  };
  obj[key] = newuser;
  fs.readFile("users.json", "utf8", function (err, data) {
    data = JSON.parse(data);
    data[key] = obj[key];
    console.log(data);
    //res.end(JSON.stringify(data));
    var updateuser = JSON.stringify(data);
    fs.writeFile("users.json", updateuser, function (err) {
      res.end(JSON.stringify(data));
    });
  });
});

app.listen(PORT, function () {
  console.log(`Server running on port ${3500}`);
});
