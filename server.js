const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = 8000;

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

//routes
app.get("/", (req, res) => {
  res.send(details);
});

//Route Get-Id parameter

app.get("/:id", (req, res) => {
  //logic
  let id = req.params.id;
  console.log(id);
  const data = details.filter((item) => item.id == id);
  res.send(data);
});

app.post("/", async (req, res) => {
  details.push(req.body);
  res.send({ message: "Data Sent successfully" });
});

// app.put
// app.delete

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
