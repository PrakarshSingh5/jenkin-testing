const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from here CI/CD! I am here just testing new things Prakarsh",
  });
});

module.exports = app;
