import User from "../models/user";
import CryptoJS from "crypto-js";
import HttpStatus from "http-status-codes";
import passport from "passport";

export const login = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(HttpStatus.BAD_REQUEST).json(info);
    }
    req.logIn(user, err => {
      if (err) {
        return next(err);
      }
      return next();
    });
  })(req, res, next);
};

export const register = (req, res) => {
  const { email, name, last_name, password } = req.body;
  User.findOne({ email: email }, (error, existingUser) => {
    if (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ type: false, message: "Bad request" });
    }
    if (existingUser) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: "Account with that email address already exists."
      });
    }
    const token = CryptoJS.enc.Utf8.parse(`${password} ${email}`);
    const passwordHash = CryptoJS.enc.Base64.stringify(token);
    const Users = new User({
      email,
      name,
      lastName: last_name,
      password: passwordHash
    }).save();
    return res
      .status(200)
      .json({ type: true, user: Users, message: "Created" });
  });
};

export const onAuth = (req, res) => {
  if (!req.user) {
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ msg: "User Not Authenticated" });
  }
  const user = req.user;
  return res.status(HttpStatus.OK).json({ msg: "Success", user });
};
