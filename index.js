const express = require("express");
const app = express();  
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hi i am grace by name ");
});

app.listen(port, () => {
    console.log("Listening to port", port);
});