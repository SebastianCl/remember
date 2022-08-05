const express = require("express");
const app = express();

app.listen(80);

app.get("/", function (req, res) {
  res.send("Hola parce!");
});

app.post("/", function (req, res) {
  res.send("melo");
});
