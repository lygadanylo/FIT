import User from "../models/user";
import CryptoJS from "crypto-js";
import HttpStatus from "http-status-codes";

export const login = (req, res, next) => {
  const { email } = req.body;
  User.findOne(
    {
      email: email
    },
    (error, user) => {
      if (error) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ success: false, message: false });
      }
      if (!user) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ type: false, message: "user not found" });
      }
      const decryptedToken = CryptoJS.enc.Base64.parse(user.password);
      const result = decryptedToken.toString(CryptoJS.enc.Utf8);
      const params = result.split(" ");
      const { password: userPassword } = req.body;
      if (userPassword !== params[0]) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ type: false, message: "password or email is not valid" });
      }
      const { email, name, lastName } = user;
      return res.status(HttpStatus.OK).json({
        user: { email, name, lastName },
        message: "Welcome"
      });
    }
  ).lean();
};

export const register = (req, res, next) => {
  const { email, name, last_name, password } = req.body;
  if (email == "" || name == "" || last_name == "" || password == "") {
    return res.status(400).json({ success: false, message: false });
  }
  User.findOne(
    {
      email: email
    },
    (error, user) => {
      if (error) {
        return res
          .status(400)
          .json({ type: false, message: "This email is using now" });
      }
      console.log(email);
      console.log(user.email);
      if (email !== user.email) {
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
      }
      return res
        .status(400)
        .json({ success: false, message: "This email is using now" });
    }
  );
};
