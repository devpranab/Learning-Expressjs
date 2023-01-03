//create server
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

//post
app.post('/addUser', (req, res) => {
    //save to database
    const user = req.body;
    user.id = 31;
    res.send(user);
})

app.listen(5001, () => console.log('Listening to port on 5009'));
//nodemon app