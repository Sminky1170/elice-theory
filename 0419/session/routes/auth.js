const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/user");
const passport = require("../passport");

router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;

  // 중복 회원가입 금지 -> 유저 네임 유일화
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return next(new Error("이미 있는 유저"));
  }

  const hashedPwd = await bcrypt.hash(password, 10);

  await User.create({
    username,
    password: hashedPwd,
  });

  res.send("회원가입 잘 됨");
});

router.post("/login", passport.authenticate("local"));

module.exports = router;
