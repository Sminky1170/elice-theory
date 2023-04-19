const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const User = require("./models/user");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    // 인증 로직

    // username 존재 여부
    const user = await User.findOne({ username });
    if (!user) return done(null, false);

    // 비밀번호 일치 여부
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return done(null, false);

    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

module.exports = passport;
