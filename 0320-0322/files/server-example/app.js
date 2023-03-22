const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const dummyData = require("./dummy.json");

let weather = { status: "sunny", temperature: "19", findust: "good" };

app.get("/data/dummy-news", async (req, res) => {
  const data = {
    data: dummyData,
  };
  res.status(200).json(data).end();
});

app.get("/data/mini-weather", async (req, res) => {
  res.status(200).json(weather).end();
});

app.post("/data/mini-weather", async (req, res) => {
  const { status, temperature, findust } = req.body;
  weather = {
    status: status ?? weather.status,
    temperature: temperature ?? weather.temperature,
    findust: findust ?? weather.findust,
  };
  res.status(200).json("Success!").end();
});

const server = app.listen(5000);

console.log("GET http://localhost:5000/data/dummy-news 에서 뉴스를 얻을 수 있습니다");
console.log("GET http://localhost:5000/data/mini-weather 에서 날씨를 얻을 수 있습니다");
console.log("POST http://localhost:5000/data/mini-weather 에서 날씨를 업데이트할 수 있습니다");

module.exports = {
  app,
  server,
};
