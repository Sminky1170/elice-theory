const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const dummyData = require("./dummy.json");

app.get("/data/dummy-news", async (req, res) => {
  const data = {
    data: dummyData,
  };
  res.status(200).json(data).end();
});

app.get("/data/mini-weather", async (req, res) => {
  res.status(200).json({ status: "sunny", temperature: "19", findust: "good" }).end();
});

const server = app.listen(5000);

console.log("http://localhost:5000/data/dummy-news 에서 뉴스를 얻을 수 있습니다");
console.log("http://localhost:5000/data/mini-weather 에서 날씨를 얻을 수 있습니다");

module.exports = {
  app,
  server,
};
