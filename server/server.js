import apiRouts from "./routs/api";
import HttpStatus from "http-status-codes";
import express from "express";
import CryptoJS from "crypto-js";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "passport";

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use("/api",apiRouts);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/create", (req, res) => {
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
      console.log(user);
      if (email === user.email) {
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
});


app.get("/profile", (req, res) => {
  res.send(user);
});

console.log("Start on PORT: ", PORT);
app.listen(PORT);
