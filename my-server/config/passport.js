var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});
passport.use(
    new GoogleStrategy(
        {
            clientID: "861043338724-41bv7rgm2h9d348fiul5cav5r3q6t2tm.apps.googleusercontent.com",
            clientSecret: "T4xazZZuQjYdelTnBFDEMxWc",
            callbackURL: "http://localhost:4500/auth/google/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            var userData = {
                email: profile.emails[0].value,
                name: profile.displayName,
                token: accessToken
            };
            done(null, userData);
        }
    )
);