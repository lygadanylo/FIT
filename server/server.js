import apiRouts from "./routs/api";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "./config/passport";
import session from "express-session";

const FileStore = require("session-file-store")(session);
const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  secret: "SECRET",
  store: new FileStore(),
  cookie:{
    path:"/",
    httpOnly: true,
    maxAge: 60*60*1000
  },
  resave: false,
  saveUninitialized: false
}));

app.use("/api", apiRouts);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(PORT, (error)=>{
  if(error){
  return console.log("something bad happened", error);
  }
  console.log(`Server is listening on ${PORT}`);
});
