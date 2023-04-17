const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

const authRouter = require("./routes/auth");

const passport = require("./passport");
const MongoStore = require("connect-mongo");

const app = express();

app.use(cors());

app.use(
  session({
    secret: "1234",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/session" }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", express.json(), authRouter);

function main() {
  try {
    app.listen(4000);
    mongoose.connect("mongodb://127.0.0.1:27017/mydb");
    // mongoose.connect("mongodb://localhost:27017/mydb");
    console.log("서버 실행 + 몽고디비 연결");
  } catch (err) {
    console.log(err);
  }
}

main();
