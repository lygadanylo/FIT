const User = require("./models/user");
var HttpStatus = require("http-status-codes");

const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  CryptoJS = require("crypto-js");

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/create", (req, res) => {
  const { email, name, last_name, password } = req.body;
  if (email == "" || name == "" || last_name == "" || password == "") {
    return res.status(400).json({ success: false, message: false });
  }
  const token = CryptoJS.enc.Utf8.parse(`${password} ${email}`);
  const passwordHash = CryptoJS.enc.Base64.stringify(token);
  console.log(passwordHash);
  const Users = new User({
    email,
    name,
    lastName: last_name,
    password: passwordHash
  }).save();
  res.redirect("http://localhost:3000/");
  // return res.status(200).json({ success: true, user: Users, message: true });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne(
    {
      email: email
    },
    (error, user) => {
      if (error) {
        console.log("asd");
        return res.status(400).json({ success: false, message: false });
      }
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "user not found" });
      }
      console.log(user);
      console.log("zxc");
      const decryptedToken = CryptoJS.enc.Base64.parse(user.password);
      const result = decryptedToken.toString(CryptoJS.enc.Utf8);

      const params = result.split(" ");
      if (password === params[0]) {
        const { email, name, lastName } = user;
        return res
          .status(HttpStatus.OK)
          .json({ success: false, user: { email, name, lastName } });
      }
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "password or email is not valid" });

      // const { email, name, last_name } = user;
      // return res.status(200).json({
      //   success: true,
      //   user: { email, name, lastName },
      //   message: true
      // });
    }
  ).lean();
});

app.get("/user", (req, res) => {
  res.send(user);
});

console.log("Start on PORT: ", PORT);
app.listen(PORT);
