const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const connectDB = require('./config/dbConn');
const zahtevRouter = require('./routes/noviZahtev');

const PORT = process.env.PORT || 3000;
app.use('/zahtevi', zahtevRouter);

connectDB();

app.get("/", (req, res) => {
  res.send("Hello Node API!");
});

app.listen(PORT, () => console.log(`Node API app is running on port ${PORT}`));


