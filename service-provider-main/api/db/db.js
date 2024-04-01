const mongoose = require("mongoose");
require("../model/provider.model");

// const mongodbUri = "mongodb://127.0.0.1:27017/providers";
const mongodbUri =
  "mongodb+srv://mahakchauhan2004:qM4bashkAcRZyIyO@cluster0.xzbvkvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(mongodbUri)
  .then(() => {
    console.log("successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });
