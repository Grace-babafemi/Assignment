const express = require("express");
const dataBase = require("./configFolder/db");
const routes = require("./Routes/userRoutes");
require("dotenv/config");

const { PORT } = process.env;

const port = PORT;
console.log(port);
dataBase();
const app = express();
app.use("/api", routes)

app.listen(port, () => {
  console.log(new Date().toLocaleDateString(), port);
});
