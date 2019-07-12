import User from "../models/user";
import CryptoJS from "crypto-js";
import HttpStatus from "http-status-codes";
import passport from "passport";

export const login = (req, res, next) => {
  console.log("work");
  const { email, password } = req.body;
  User.findOne(
    {
      email: email
    },
    (error, user) => {
      if (error) {
        return res.status(400).json({ success: false, message: false });
      }
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "user not found" });
      }
      const decryptedToken = CryptoJS.enc.Base64.parse(user.password);
      const result = decryptedToken.toString(CryptoJS.enc.Utf8);
      const params = result.split(" ");
      if (password === params[0]) {
        const { email, name, lastName, password } = user;
        return res
          .status(HttpStatus.OK)
          .json({ success: false, user: { email, name, lastName, password } });
      }
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "password or email is not valid" });
    }
  ).lean();
};

export const register = (req,res, next) =>{
  console.log("work");
  const { email, name, last_name, password } = req.body;
  if (email == "" || name == "" || last_name == "" || password == "") {
    return res.status(400).json({ success: false, message: false });
  }
  User.findOne(
    {
      email: email
    },
    (error, user) => {
      console.log(email);
      if (error) {
        return res.status(400).json({ success: false, message: false });
      }
      console.log(User);
      if (email === User.email) {
        return res.status(400).json({ success: false, message: false });
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
        .json({ success: true, user: Users, message: true });
    }
  );
}