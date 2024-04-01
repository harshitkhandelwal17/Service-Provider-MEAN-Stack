"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("./db/db");
const port = 3000;
const route = require("./route");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/v1", route);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

const server = app.listen(port, () => {
  console.log("listening on port " + port);
});
