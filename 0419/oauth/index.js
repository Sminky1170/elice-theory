const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const passport = require("./passport");

const app = express();

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/session" }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

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
