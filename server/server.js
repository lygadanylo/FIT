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
app.use("/api", apiRouts);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/profile", (req, res) => {
  res.send();
});

console.log("Start on PORT: ", PORT);
app.listen(PORT);
