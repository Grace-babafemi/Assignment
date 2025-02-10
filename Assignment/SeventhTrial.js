const express = require("express")
const app = express();
const port = 2022;
app.use(express());

let seven = require("./todoObj")

app.get("/", (req, res) => {
    res.status(200).json(seven);
});

app.post("/", (req, res) => {
    const {title, description, status,dueDate} = req.body;
    seven.push({
        id:seven.length + 1,
        title,
        description,
        status,
        dueDate
    })
    res.status(200).json({Message: "CREATED SUCCESSFULLY"});
});


app.patch("/", (req, res) => {
    const {title, description, status, dueDate} = req.body;
    let {id} = req.params;
    id = parseInt(id);
    const changes = seven.find((e) => e.id === id);
    if (changes) {
        if(title) changes.title = title;
        if(description) changes.description = description;
        if(status) changes.status = status;
        if(dueDate) changes.dueDate = dueDate
        res.status(200).json({Message: "UPDATED"});
    } else {
        res.status(404).json({Message: "NO TASK TO UPDATE"})
    }
});

app.delete("/:id", (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    const search = seven.find((e) => e.id === id);
    if (search) {
        const deletes = seven.filter((e) => e.id === id);
        seven = deletes;
        res.status(200).json({Message: "DELETED"})
    } else {
        res.status(400).json({Message: "NO TASK"})
    }
});

app.get("/:status", (req, res) => {
let {status} = req.params;
const getStatus = seven.filter((e) => e.status === status)
res.status(200).json({Message: "CHECKING FOR STATUS", data: getStatus})
});

app.get("/:dueDate", (req, res) => {
    let {dueDate} = req.params;
    const getDueDate = seven.filter((e) => e.dueDate === dueDate)
    res.status(200).json({Message: "CHECKING DUE DATE", data: getDueDate});
});

app.delete("/", (req, res) => {
    seven = [];
    res.status(200).json({Message: "ALL ITEMS DELETED!"});
});






app.listen(port, () => {
    console.log(`App is listening to port http://localhost${port}`)
})