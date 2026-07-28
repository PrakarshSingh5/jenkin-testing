const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Jenkins CI/CD! I am here just testing new things",
  });
});

module.exports = app;
