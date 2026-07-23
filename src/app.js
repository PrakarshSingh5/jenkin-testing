const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Jenkins CI/CD!",
  });
});

module.exports = app;
