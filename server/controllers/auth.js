import User from "../models/user";
import CryptoJS from "crypto-js";
import passport from "passport";

export const login = (req, res, next) => {
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
}