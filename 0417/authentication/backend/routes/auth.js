const router = require("express").Router();
// const {Router} = require("express")
// const router = Router()
const User = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("../passport");

router.post("/signup", async (req, res, next) => {
  console.log("signup");
  console.log(req.body);
  const { username, password } = req.body;

  const exsitingUser = await User.findOne({ username });
  if (exsitingUser) return next(new Error("이미 있는 유저!!"));

  const user = await User.create({
    username,
    password: await bcrypt.hash(password, 10),
  });

  req.login(user, (err) => {
    if (err) return next(err);
    res.send("회원가입 됨");
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("로그인 됨");
});

module.exports = router;
