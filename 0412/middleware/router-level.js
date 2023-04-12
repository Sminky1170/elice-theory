const express = require("express");

const app = express();

const middleware = (req, res, next) => {
  console.log("router-level middleware");
  next();
};

app.use("/user", middleware);

app.get("/", (req, res) => {
  res.send("hello node!!");
});

app.get("/user", (req, res) => {
  res.send("user page");
});

app.listen(4000);
