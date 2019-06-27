const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors");

const app = express();
const PORT = 3001;
let user = {};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const { email, name, lastName, password } = req.body;
  if (email == "" || name == "" || lastName == "" || password == "") {
    return res.status(200).json({ success: false, message: "Field is empty" });
  }
  user = { email, name, lastName, password };
  return res
    .status(200)
    .json({ success: true, user: user, message: "Account create!" });
});

app.get("/user", (req, res) => {
  res.send(user);
});

console.log("Start on PORT: ", PORT);
app.listen(PORT);
