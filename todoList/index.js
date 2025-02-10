const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());

let todo = [
  {
    id: 1,
    title: "Go to market",
    wannaDo: "Buy some food stuff",
    date: "10/10/2021",
  },
  {
    id: 2,
    title: "Go to shop",
    wannaDo: "Buy some stuff",
    date: "30/4/2021",
  },
  {
    id: 3,
    title: "Go to school",
    wannaDo: "Attend the class early",
    date: "21/07/2021",
  },
];

app.get("/", (req, res) => {
  res.status(200).json(todo);
});

// create todo
app.post("/", (req, res) => {
  const { title, wannaDo, date } = req.body;

  const checkTodo = todo.findIndex((e) => e.title === title);
  if (checkTodo === -1) {
    if (title && wannaDo && date) {
      todo.push({
        id: todo.length + 1,
        title,
        wannaDo,
        date,
      });
      res.status(200).json({
        maesage: "todo created successfully",
        user: { title, wannaDo, date},
      }); 
    } else {
      res.status(400).json({ message: "All field are required" });
    }
  } else {
    res.status(409).json({ message: "title already exist" });
  }
});

// get one wannaDo

app.get("/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  const getAllTodo = todo.findIndex((e) => e.id === id);
  if (getAllTodo === -1) {
    res.status(404).json({ message: "title not found" });
  } else {
    res
      .status(200)
      .json({ message: "Title available", data: todo[getAllTodo] });
  }
});


// delete todo 
app.delete("/:id", (req, res) => {
    const getAllTodo = todo.filter((e) => e.id === parseInt(req.params.id));
    todo = getAllTodo
    res.status(404).json({message: "Todo deleted successfully"})
});


// update todoList
app.patch("/:id", (req, res) => {
    const getAllTodo = todo.find((e) => e.id === parseInt(req.params.id));
    
    if (getAllTodo) {
        const {title, wannaDo, date} = req.body
        if(title) getAllTodo.title = title;
        if(wannaDo) getAllTodo.wannaDo = wannaDo;
        if(date) getAllTodo.date = date;
        res.status(201).json({message : "Todo updated successfully"});
    } else {
        res.status(404).json({message : "Todo not found"})
    }
});

// Todo Not Found
app.all("*", (req, res) => {
    res.status(404).json({ message: "Route Does Not exist" });
  });


app.listen(port, () => {
  console.log(`App is listening to port https://localhost${port}`);
});
