const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 20204;
app.use(express());

mongoose
  .connect("mongodb://localhost:27017/libraryDB")
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log("An error occurred");
  });

const BookSchema = new mongoose.Schema({
  title: String,
  yearPublished: Number,
  author: String,
  category: String,
});

const bookModel = mongoose.model("book", BookSchema);

app.get("/", async (req, res) => {
  try {
    const getBook = await bookModel.find();
    res.status(200).json({ Message: "All books", books: getBook });
  } catch (error) {
    res.status(404).json({ Message: "An Error Occurred", error });
  }
});

app.post("/", async (req, res) => {
  try {
    const { title, yearPublished, author, category } = req.body;
    const postBook = await bookModel.create({
      title,
      yearPublished,
      author,
      category,
    });
    res.status(201).json({ Message: "Book Posted", data: postBook });
  } catch (error) {
    res.status(500).json({ Message: "An Error Occurred", error });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getOneBook = await bookModel.findById(id);

    if (!getOneBook) {
      res.status(404).json({ Message: "This book does not exist" });
    }

    res.status(200).json({ Message: "Book Gotten", data: getOneBook });
  } catch (error) {
    res.status(500).json({ Message: "An Error Occurred", error });
  }
});

app.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, yearPublished, category } = req.body;
    const updateBook = await bookModel.findByIdAndUpdate(id, {
      title,
      author,
      yearPublished,
      category
    },
    {
        new: true
    }
);
if (!updateBook) {
    res.status(404).json({Message: "This book does not exist"})
}
res.status(200).json({Message: "Book Gotten", data:updateBook});

  } catch (error) {
    res.status(500).json({Message: "An Error Occurred", error})
  }
});

app.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleBook = await bookModel.findByIdAndDelete(id);

        if (!deleBook) {
            res.status(404).json({Message: "This book does not exist"})
        }
        res.status(200).json({Message: "Book Deleted"})
    } catch (error) {
        res.status(500).json({Message: "An error occurred", error})
    }
});

const date = new Date();

app.listen(port, () => {
    console.log(date.toDateString(), port)
});
