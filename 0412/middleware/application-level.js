const express = require("express");

const app = express();

const middleware = (req, res, next) => {
  console.log("Application-level middleware");
  next();
};

app.use(middleware);

app.get("/", (req, res) => {
  res.send("hello node!!");
});

app.listen(4000);
