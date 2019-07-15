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
  const validationPassword = "/^[a-zA-Z0-9!@#$%^&*_=+-]{8,12}$/g";
  const validationEmail =
    "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
  if (email == "" || name == "" || last_name == "" || password == "") {
    if (email != validationEmail || password != validationPassword) {
      return res
        .status(400)
        .json({ type: false, message: "Email or Password invalid" });
    }
    return res.status(400).json({ success: false, message: "Field is empty" });
  }
  User.findOne(
    {
      email: email
    },
    (error, user) => {
      console.log(email);
      console.log(user.email);
      if (error) {
        return res
          .status(400)
          .json({ type: false, message: "This email is using now" });
      }
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
        .json({ type: false, message: "This email is using now" });
    }
  );
};
