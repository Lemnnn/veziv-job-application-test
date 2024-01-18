const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const WorkModel = require("./models/Work");

app.use(express.json());
app.use(cors());

mongoose.connect("");

app.post("/create", async (req, res) => {
  /*multer*/
  const workTitle = req.body.title;
  const workLink = req.body.link;
  const workDescription = req.body.description;

  try {
    const work = new WorkModel({
      title: workTitle,
      link: workLink,
      description: workDescription,
    });
    await work.save();
    res.status(201).json({ message: "Entry created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating entry" });
  }
});

app.get("/read", async (req, res) => {
  try {
    const result = await WorkModel.find({}).exec();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
