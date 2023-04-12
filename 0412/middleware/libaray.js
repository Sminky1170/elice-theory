const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const bodyParser = require("body-parser");

// 내장 미들웨어
app.use("/blog", bodyParser.json());
app.use(bodyParser.urlencoded());
// app.use(express.static(""));

// 외부 라이브러리 미들웨어 passport, helmet, cors

app.get("/", (req, res) => {
  res.send("express server!!");
});

app.listen(4000);
