const express = require("express");
const app = express();
const port = 2021;
app.use(express());

const six = require("./todoObj");

app.get("/", (req, res) => {
  res.status(200).json(six);
});

app.post("/", (req, res) => {
  const { title, description, status, dueDate } = req.body;
  six.push({
    id: six.length + 1,
    title,
    description,
    status,
    dueDate,
  });
  res.status(200).json({ Message: "created" });
});

app.patch("/", (req, res) => {
  const { title, description, status, dueDate } = req.body;
  let { id } = req.params;
  id = parseInt(id);
  const change = six.find((e) => e.id === id);
  if (change) {
    if (title) change.title = title;
    if (description) change.description = description;
    if (status) change.status = status;
    if (dueDate) change.dueDate = dueDate;
    res.status(200).json({ Message: "Updated" });
  } else {
    res.status(404).json({ Message: "No task" });
  }
});

app.delete("/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const search = six.find((e) => e.id === id);
  if (search) {
    const deleteOne = six.filter((e) => e.id === id);
    six = deleteOne;
    res.status(200).json({ Message: "DELETED" });
  } else {
    res.status(400).json({ Message: "NO TASK TO DELETE" });
  }
});

app.get("/:status", (req, res) => {
  let { status } = req.params;
  const getST = six.filter((e) => e.status === status);
  res.status(200).json({ Message: "CHECKING FOR PENDING", data: getST });
});

app.get("/:dueDate", (req, res) => {
  let { dueDate } = req.params;
  const getDueD = six.filter((e) => e.dueDate === dueDate);
  res.status(200).json({ Message: "CHECKING FOR DUE DATE", data: getDueD });
});

app.delete("/", (req, res) => {
  six = [];
  res.status(200).json({ Message: "ALL ITEMS DELETED SUCCESSFULLY!" });
});

app.listen(port, () => {
  console.log(`App is listening to port http://localhost${port}`);
});
