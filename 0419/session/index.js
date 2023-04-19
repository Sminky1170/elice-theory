const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const authRouter = require("./routes/auth");
const passport = require("./passport");

const app = express();

app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/session" }),
    // store: MongoStore.create({mongoUrl: "mongodb://localhost:27017/session"})
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);

app.get("/mypage", (req, res) => {
  console.log("user", req.user);
  console.log("인증여부", req.isAuthenticated());
  // if(req.isAuthenticated())
  if (req.user) {
    res.send("안녕하세요" + req.user.username);
  } else {
    res.send("인증 안됨");
  }
});

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
