const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.port || 3500;

app.get("/", (req, res) => {
  //res.send("hi divya");
  res.sendFile(path.join(__dirname, "Create", "create.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${3500}`));
