const express = require("express");
const app = express();
const port = 1000;
app.use(express());


let tdList = require("./todoObj")

app.get("/", (req, res) => {
    res.status(200).json(tdList)
});

app.post("/", (req, res) => {
    const {title, description, status, priority, dueDate} = req.body;
    tdList.push({
          id: todo.length + 1,
            title,
            description,
            status,
            priority,
            dueDate,
    });
    res.status(200).json({
        alert: "Todo Created SUCCESSFULLY!",
    });
});


app.patch("/:id", (req, res) => {
    const {title, description, status, priority, dueDate} = req.body;
    let {id} = req.params;
    id = parseInt(id);

    const Updates = tdList.find((e) => e.id === id)
    if (Updates) {
        if(title) Updates.title = title;
        if(description) Updates.description = description;
        if(status) Updates.status = status;
        if(priority) Updates.priority = priority;
        if(dueDate) Updates.dueDate = dueDate;
        res.status(200).json({Message: "Update SUCCESSFULLY!"});
    } else {
        res.status(404).json({Message: "Task does not exist"});
    }
});


app.delete("/:id", (req, res) => {
    let {id} = req.params;
    id = parseInt(id)
    const findTodoList = tdList.find((e) => e.id === id);
    if (findTodoList) {
        const deleteTodo = tdList.filter((e) => e.id === id);
        tdList = deleteTodo;
        res.status(200).json({Message: "Todo deleted successfully"});
    } else {
        res.status(404).json({Mesage: "No  task to delete"});
    }
});

app.get("/status", (req, res) => {
    let {status} = req.params;
    const Status = tdList.filter((e) => e.status === status);
    res.status(200).json({Message: "checking for pending", data: Status});
});


app.get("/dueDate", (req, res) => {
    let { dueDate} = req.params;
    const getDue = tdList.filter((h) => h.dueDate === dueDate);
    res.status(200).json({Message: "Checking for due date!"});
});


app.delete("/", (req, res) => {
    tdList = []
    res.status(200).json({Message: "All items deleted SUCCESSFULLY!"})
});

app.listen(port, () => {
    console.log(`App is listening to port https://localhost${port}`)
})

 