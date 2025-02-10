const express = require("express");
const app = express();
const port = 2023;
app.use(express());

let eight = require("./todoObj");

app.get("/", (req, res) => {
    res.status(200).json(eight)
});


app.post("/", (req, res) => {
    const {title, description, status, dueDate} = req.body;
    eight.push({
        id: eight.length + 1,
        title,
        description, 
        status,
        dueDate
    })
    res.status(200).json({Message: "Todo Created SUCCESSFULLY!"});
});


app.patch("/", (req, res) => {
    const {title, description, status, dueDate} = req.body;
    let {id} = req.params;
    id = parseInt(id)
    const changeSome = eight.find((e) => e.id === id)
    if (changeSome) {
        if(title) changeSome.title = title
        if(description) changeSome.description = description
        if(status) changeSome.status = status
        if(dueDate) changeSome.dueDate = dueDate
        res.status("/", (req, res) => {
            
        })
    } else {
        
    }
})