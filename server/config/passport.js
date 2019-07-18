import passport from "passport";
import User from "../models/user";
import LocalStrategy from "passport-local";

passport.serializeUser(function(user, done) {
    console.log("serializeUser: ", user)
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    console.log("deserializeUser: ", user)
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            msg: `Email ${email} not found. Please sign up.`
          });
        }
        return done(null, user);
      });
    })
  );

export default passport;