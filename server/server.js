// import User from "./models/user";
const User = require("./models/user");

const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors");

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
  const Users = new User({ email, name, lastName: last_name, password });
  return res.status(200).json({ success: true, user: Users, message: true });
});

app.post("/login", (req, res) => {
  const { email } = req.body;
  console.log(email);
  User.findOne(
    {
      email: email
    },
    (error, user) => {
      if (error) {
        return res.status(400).json({ success: false, message: false });
      }
      const { email, name, last_name } = user;
      return res.status(200).json({
        success: true,
        user: { email, name, lastName },
        message: true
      });
    }
  ).lean();
});

app.get("/user", (req, res) => {
  res.send(user);
});

console.log("Start on PORT: ", PORT);
app.listen(PORT);
