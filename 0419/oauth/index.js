const express = require("express");

const app = express();

app.get("/login", (req, res) => {
  if (req.user) return res.redirect("/");
  res.sendFile(__dirname + "/html/login.html");
});

app.get("/", (req, res) => {
  if (!req.user) return res.redirect("/login");
  res.sendFile(__dirname + "/html/index.html");
});

app.listen(4000, () => {
  console.log(`서버 실행 중`);
});
