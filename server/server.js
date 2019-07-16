import apiRouts from "./routs/api";
import express from "express";
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

app.listen(PORT, (error)=>{
  if(error){
  return console.log("something bad happened", error);
  }
  console.log(`Server is listening on ${PORT}`);
});
