const express = require("express");
const url = require("url");
const data = require("./data.json");

const app = express();

app.get("/", (req, res) => {
  res.send("안녕하세요");
});

// url 에서 query string 받아오기
app.get("/query", (req, res) => {
  const urlObj = url.parse(req.url, true).query;
  res.send(urlObj);
});

// 특정 url 에서 특정 함수 실행시키기 => 라우팅!!
app.get("/users/name", (req, res) => {
  console.log(req.params);

  const name = req.params.name;

  // if (data[name]) {
  //   // 준비한 페이지;
  //   res.send(`Hello ${data[name].nickname}`);
  // } else {
  //   // error 페이지;
  res.status(404).end();
  // }
  res.send("hi");
});

// html 파일 보여주기
app.get("/page", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080);
