const express = require('express'),
bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
const PORT = 3001;

let user;

app.post('/',(req,res) => {
    user = req.body;
    console.log(user);
});

app.get('/users',(req,res) => {
    res.send(user);
});

app.listen(PORT);

