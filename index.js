//import an express module
const express = require("express");
const port = 4000;

//create an instance of the express application
const app = express();

//define a route mechanism
app.get("/all", (req, res) => {
  res.send("Hello Buddy.Welcome to express Server");
});

app.get("/users", (req, res) => {
  res.send("Users listed here");
});

//creater a router for user

app.route("/users").get((req, res) => {
  res.send("User are listed here");
});

app.route("/students").get((req, res) => {
  res.send("Students are listed here");
});

//post
app.post("/", (req, res) => {
  console.log(req.body);
  res.send({
    status: 200,
    message: "Data Send successfully",
  });
});
//Start the server and listen to a port number
app.listen(port, () => {
  console.log("Server is running on port :" + port);
});
