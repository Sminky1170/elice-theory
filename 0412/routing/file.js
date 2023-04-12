const express = require("express");

const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Pug", heading: "동적 웹페이지입니다!!" });
});

// app.use("/static", express.static("public"));

// app.get("/", (req, res) => {});

app.listen(4000);
