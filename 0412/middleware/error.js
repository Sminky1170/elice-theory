const express = require("express");

const app = express();

const middleware1 = (req, res, next) => {
  console.log("one");
  // throw new Error("에러 발생!!");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("two");
  next();
};

const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  res.send(err.message);
};

app.get("/", (req, res) => {
  throw new Error("에러!!");
  res.send("hello node!!");
});

app.use("/", middleware1, middleware2, errorMiddleware);

app.get("/error", (req, res) => {
  res.send("응답");
});

// app.use(errorMiddleware);

app.use((req, res, next) => {
  res.status(404);
  res.send("페이지를 찾을 수 없습니다.");
});

app.listen(4000);
