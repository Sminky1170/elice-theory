const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express Server");
});

app.listen(8080);
