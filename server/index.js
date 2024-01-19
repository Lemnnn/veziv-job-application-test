const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const app = express();

const WorkModel = require("./models/Work");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() + 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());
app.use("/images", express.static(`${__dirname}/images`));

mongoose.connect("");

app.post("/create", upload.single("image"), async (req, res) => {
  const workImage = req.file;
  const workTitle = req.body.title;
  const workLink = req.body.link;
  const workDescription = req.body.description;

  console.log({ file: req.file, body: req.body });

  try {
    const work = new WorkModel({
      image: workImage.filename,
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
    const result = await WorkModel.find({}).sort({ createdAt: -1 });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await WorkModel.findByIdAndDelete(id);
    res.send("deleted");
  } catch (err) {
    res.send(err);
  }
});

app.patch("/toggleHidden/:id", async (req, res) => {
  const { id } = req.params;
  const { hidden } = req.body;

  try {
    const updateStatus = await WorkModel.findByIdAndUpdate(
      id,
      { hidden },
      {
        new: true,
      }
    );
    res.status(200).json({ updateStatus });
  } catch (err) {
    res.send(err);
  }
});

app.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { title, link, description } = req.body;

  console.log(title, link, description);

  try {
    const updatedCardData = await WorkModel.findByIdAndUpdate(
      id,
      {
        title,
        link,
        description,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ updatedCardData });
  } catch (err) {
    res.send(err);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
