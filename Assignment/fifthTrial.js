const express = require("express");
const app = express();
const port = 2020;
app.use(express());

let tdl = require("./todoObj");

app.get("/", (req, res) => {
    res.status(200).json(tdl);
});


app.post("/", (req, res) => {
    const {title, description, status, dueDate} = req.body;
    tdl.push({
        id:tdl.length + 1,
        title,
        description,
        status,
        dueDate 
    });
    res.status(200).json({
        alert: "Created successfully!",
    });
});

app.patch("/", (req,res) => {
    const {title, description, status, dueDate} = req.body;
    let {id} = req.params;
    id = parseInt(id)
    const upGrade = tdl.find((e) => e.id === id);
    if (upGrade) {
         if(title) upGrade.title = title;
         if(description) upGrade.description = description;
         if(status) upGrade.status = status;
         if(dueDate) upGrade.dueDate = dueDate;
         res.status(200).json({Message: "updated SUCCESSFULLY!"})        
    } else {
        res.status(404).json({Message: "No Task"})
    }
});

app.delete("/:id", (req, res) => {
    let {id} = req.params;
    id = parseInt(id);
    const searchTd = tdl.find((e) => e.id === id);
    if (searchTd) {
        const deleteTD = tdl.filter((e) => e.id !== id)
        tdl = deleteTD
        res.status(200).json({Message: "DELETED"})
    } else {
        res.status(404).json({Message: "No task"})
    }
})

app.get("/:status", (req, res) => {
    let {status} = req.params;
    const getSta = tdl.filter((e) => e.status === status);
    res.status(200).json({Message: "Checking for status", data: getSta});
});

app.get("/:dueDate", (req, res) => {
    let {dueDate} = req.params;
const getDD = tdl.filter((e) => e.dueDate === dueDate);
res.status(200).json({Message: "Checking for date", data: getDD})
})

app.delete("/", (req, res) => {
    tdl= [];
    res.status(200).json({Message: "All items deleted"})
});


app.listen(port, () => {
    console.log(`App is listening to porthttp://localhost${port}`)
})