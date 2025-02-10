const express = require("express");
const app = express();
const port = 2000;
app.use(express.json());


let list = require("./todoObj");

app.get("/", (req, res) => {
    res.status(200).json(list)
});

// Create todoList
app.post("/", (req,res) => {
const {title, description, status, dueDate} = req.body
list.push({
id: list.length + 1,
title,
description,
status,dueDate
}); 
res.status(200).json({
    alert: "Todo created successfully",
});
});


// Update TodoList
app.patch("/", (req, res) => {
    const {title, description, status, dueDate} = req.body;
    let {id} = req.params;
    id = parseInt(id);
    const updates = list.find((e) => e.id === id);
    if (updates) {
        if(title) updates.title = title;
        if(description) updates.description = description;
        if(status) updates.status = status;
        if(dueDate) updates.dueDate = dueDate;
        res.status(200).json({message: "Todo List Updated SUCCESSFULLY!"})
    } else {
        res.status(404).json({message: "Task Does Not Exist!"})
    }
});


// Delete TodoList
app.delete("/:id", (req, rse) => {
    let {id} = req.params;
    id = parseInt(id);

    const searchTodo = list.find((e) => e.id === id);
    if (searchTodo) {
        const deleteTodo = list.filter((e) => e.id !== id);
        list = deleteTodo;
        res.status(200).json({Message: "TodoList Deleted SUCCESSFULLY!"})
    } else {
        res.status(400).json({Message: "No Task To Delete"})
    }
})

app.get("/:status", (req, res) => {
    let {status} = req.params;
    const getStatus = list.filter((e) => e.status === status);
    res.status(200).json({Message: "Checking for Pending", data:getStatus});
});

app.get("/:dueDate", (req, res) => {
    let {dueDate} = req.params;
    const getDueDate = list.filter((b) => b.dueDate === dueDate)
    res.status(200).json({Message: "Checking for due date", data: getDueDate});
});

app.delete("/", (req, res) => {
    list = [];
    res.status(200).json({Message: "All Items Deleted SUCCESSFULLY!"});
});



app.listen(port, () => {
    console.log(`App is listening to port http://localhost${port}`)
})