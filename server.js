require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = require('./config/corsOptions')
const Zahtev = require("./models/zahtevModel");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.get("/zahtevi", async (req, res) => {
  try {
    const zahtevi = await Zahtev.find({});
    res.status(200).json(zahtevi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/zahtevi/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const zahtev = await Zahtev.findById(id);
    res.status(200).json(zahtev);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/zahtevi", async (req, res) => {
  try {
    const zahtev = await Zahtev.create(req.body);
    res.status(200).json(zahtev);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.put("/zahtevi/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const zahtev = await Zahtev.findByIdAndUpdate(id, req.body);
    if (!zahtev) {
      return res
        .status(404)
        .json({ message: `Cannot find any product with ID ${id}` });
    }
    const updatedZahtev = await Zahtev.findById(id);
    res.status(200).json(updatedZahtev);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/zahtevi/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const zahtev = await Zahtev.findByIdAndDelete(id);
    if (!zahtev) {
      return res
        .status(404)
        .json({ message: `Cannot find any zahtev with ID ${id}` });
    }
    res.status(200).json(zahtev);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => console.log(`Node API app is running on port 3000`));
  })
  .catch((error) => {
    console.log(error);
  });
