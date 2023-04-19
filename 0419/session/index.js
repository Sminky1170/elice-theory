const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.use(express.static(__dirname + "/build"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

function main() {
  try {
    app.listen(4000);
    mongoose.connect("mongodb://127.0.0.1:27017/mydb");
  } catch (err) {
    console.log(err);
  }
}

main();
