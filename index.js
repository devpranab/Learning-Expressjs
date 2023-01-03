//create server
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

//return express
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server Running!");
});

//Send as file
app.get("/access", (req, res) => {
  res.sendFile(__dirname + '/text.txt')
});

const users = ["Pranab", "Araj", "Miraj", "Avik"];

app.get("/users/:id", (req, res) => {
  //console.log(req.params.id);
  //console.log(req.query.sort);
  const userId = req.params.id;
  const name = users[userId];
  res.send({ userId, name });
});

//Post
app.post("/api/addUsers", (req, res) => {
  console.log(req.body);
});

const port = 5005;

//listen on port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});