const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2");

passport.use(
  new GoogleStrategy(
    {
      clientID: "구글 client ID",
      clientSecret: "구글 secret ID",
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser((profile, done) => {
  done(null, profile.id);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

module.exports = passport;
