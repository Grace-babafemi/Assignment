const express = require("express");
const app = express()
const port = 2020;
app.use(express());

let todoLt = require("./todoObj");
const { title } = require("process");

app.get("/", (req, res) => {
    res.status(200).json(todoLt)
});

app.post("/", (req, res) => {
    const {title, description, status, priority, dueDate} = req.body;
    todoLt.push({
        id: todoLt.length + 1,
        title,
        description,
        status,
        priority,
        dueDate
    })
    res.status(200).json({
        alert: " Todo is created",
    });
});

app.patch("/id", (req, res) => {
    const {title, description, status, dueDate, priority} = req.body;
    let {id} = req.params;
    id = parseInt(id);

    const updateTd = todo.find((e) => e.id === id);
    if (updateTd) {
        if(title) updateTd.title = title;
        if(description) updateTd.description = description;
        if(status) updateTd.status = status;
        if(priority) updateTd.priority = priority;
        if(dueDate) updateTd.dueDate = dueDate;
        res.status(200).json({Message: "Updated", data: req.body})
    } else {
        res.status(404).json({ Message: "task does not exit" });
    }
});

app.delete("/:id", (req, res) => {
    let {id} = req.params;
    id = parseInt(id);
    const findTd = todoLt.find((e) => e.id === id);
    if (findTd) {
        const deleteTd = todoLt.filter((e) => e.id !== id);
        todoLt = deleteTd
        res.status(200).json({Message: "Deleted"})
    } else {
        res.status(404).json({Message: "No task"})
    }
});

app.get("/:status", (req, res) => {
    let {status} = req.params;
    const seeStatus = todoLt.filter((e) => e.status === status);
    res.status(200).json({Message: "Checking for pending", data:seeStatus});
});

app.get("/dueDate", (req, res) => {
    let {dueDate} = req.params;
    const checkDueDate = todoLt.filter((es) => es.dueDate === dueDate)
    res.status(200).json({Message: 'Checking due date', data:checkDueDate})
});

app.delete("/", (req, res) => {
    todoLt = [];
    res.status(200).json({Message: "All deleted"});
});

app.listen(port, () => {
    console.log(`App is listening to port http://localhost${port}`)
})