//npm i express@4.18.2
//create server
const express = require("express");
//return express
const app = express();

app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.get("/me", (req, res) => {
    const me = {
        Name: "Pranab Sarkar",
        Prof: "Pragrammer"
    }
    res.send(me);
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