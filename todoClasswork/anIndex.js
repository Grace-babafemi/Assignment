const express = require("express");
const app = express();
const port = 5040;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Gotten all user" });
});

app.post("/", (req, res) => {
  res.status(200).json({ message: "User created successfully" });
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
