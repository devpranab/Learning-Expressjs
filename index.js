//npm i express@4.18.2
//create server
const express = require("express");
//return express
const app = express();

app.get("/", (req, res) => {
  res.send("Server is Running!");
});

const port = 5005;

//listen on port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//node index //run server
//localhost:5005