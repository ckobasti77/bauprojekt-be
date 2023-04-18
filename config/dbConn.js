const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const connectDB = async () => {
  mongoose
    .connect("mongodb://localhost:27017/Zahtevi", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

