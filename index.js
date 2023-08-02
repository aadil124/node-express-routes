const express = require("express");

const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.send("server started");
});

app.route("/user").get((req, res) => {
  res.send("user data are here");
});

app.listen(port, () => {
  console.log(`server is running at : ${port}`);
});

let details = [
  {
    id: 1,
    name: "Abhijeet",
    email: "abhijeet@gmail.com",
  },
  {
    id: 2,
    name: "Pardeep",
    email: "pardeep@gmail.com",
  },
  {
    id: 3,
    name: "Rajshekar Buddha",
    email: "buddha@gmail.com",
  },
  {
    id: 4,
    name: "Amir",
    email: "amir@gmail.com",
  },
  {
    id: 5,
    name: "Leonard",
    email: "leonard@gmail.com",
  },
  {
    id: 6,
    name: "Shivam",
    email: "Shivam@gmail.com",
  },
];

app.route("/student").get((req, res) => {
  res.send(details);
});
