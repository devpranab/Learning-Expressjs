//npm i express@4.18.2
//create server
const express = require("express");
var cors = require("cors");

//return express
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Running!");
});

const users = ["Pranab", "Araj", "Miraj", "Avik"];

app.get("/users/:id", (req, res) => {
  //console.log(req.params.id);
  //console.log(req.query.sort);
  const userId = req.params.id;
  const name = users[userId];
   res.send({userId, name});
  });

const port = 5005;

//listen on port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//node index //run server
//localhost:5005
//nodemon index //run server(auto reload)
//localhost:5005/a