const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors");

const app = express();
const PORT = 3012;
let user = {};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/create", (req, res) => {
  console.log(req.body);
  user.name = req.body.name;
  res.send(req.body);
});

app.get("/user", (req, res) => {
  res.send(user);
});

console.log("Start on PORT: ", PORT);
app.listen(PORT);
