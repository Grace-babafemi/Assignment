const express = require("express");
const app = express();
const port = 2000;
app.use(express());

let todoList = require("./todoObj");

app.get("/", (req, res) => {
  res.status(200).json(todoList);
});

app.post("/", (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;
  todoList.push({
    id: todoList.length + 1,
    title,
    description,
    status,
    dueDate,
    priority,
  });
  res.status(200).json({
    alert: "todo created successfully!",
  });
});

// update todoList
app.patch("/:id", (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;
  let { id } = req.params;
  id = parseInt(id);
  const updateTodo = todoList.find((e) => e.id === id);
  if (updateTodo) {
    if (title) updateTodo.title = title;
    if (description) updateTodo.description = description;
    if (status) updateTodo.status = status;
    if (priority) updateTodo.priority = priority;
    if (dueDate) updateTodo.dueDate = dueDate;
    res
      .status(200)
      .json({ Message: "Todo Updated SUCCESSFULLY!", data: req.body });
  } else {
    res.status(404).json({ Message: "Task Does Not Exist" });
  }
});

app.delete("/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const findTodoList = todoList.find((e) => e.id === id);
  if (findTodoList) {
    const deleteTodoList = todoList.filter((e) => e.id !== id);
    todoList = deleteTodoList;
    res.status(200).json({ Message: "Todo deleted SUCCESSFULLY!" });
  } else {
    res.status(400).json({ Message: "No Task To Delete" });
  }
});

app.get("/:status", (req, res) => {
  let { status } = req.params;
  const getStatus = todoList.filter((e) => e.status === status);
  res.status(200).json({ Message: "Checking for pending", data: getStatus });
});

app.get("/dueDate", (req, res) => {
  let { dueDate } = req.params;
  const GetDueDate = todoList.filter((g) => g.dueDate === dueDate);
  res.status(200).json({ Message: "Checking Due Date", data: GetDueDate });
});

app.delete("/", (req, res) => {
  todoList = [];
  res.status(200).json({ Message: "All Items Deleted", data: todoList });
});

app.listen(port, () => {
  console.log(`App is listening to port https://localHost${port}`);
});
