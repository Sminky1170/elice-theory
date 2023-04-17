const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const postsRouter = require("./routes/posts");

const app = express();

app.use(cors());

// const bodyParser = require("body-parser");
// app.use(bodyParser.json())

app.use(express.json());

app.use("/posts", postsRouter);

app.use((err, req, res, next) => {
  console.log(err.message);
  res.send(err.message);
});

function main() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/mydb");
    // mongoose.connect("mongodb://localhost:27017/mydb")
    app.listen(4000);
    console.log("서버 실행 + mongodb 연결");
  } catch (err) {
    console.log(err);
  }
}

main();
