const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", function (req, res) {
  res.render("index", { title: "Express", message: "Hello world!" });
});

app.listen(4000, () => {
  console.log(`Example app listening at http://localhost:4000`);
});
