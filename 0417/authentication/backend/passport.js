const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("./models/user");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    // 회원가입 및 로그인 확인 로직
    const user = await User.findOne({ username });
    if (!user) return done(null, false);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return done(null, false);

    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

module.exports = passport;
