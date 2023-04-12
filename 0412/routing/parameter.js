const express = require("express");

const app = express();

app.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.send(String(userId));
});

app.get("/aa", (req, res) => {
  res.send("hello node!!");
});

app.listen(4000);
