
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Version 2.0 - Automatically deployed using GitHub Actions CI/CD!");
});

app.get("/health", (req, res) => {
    res.status(200).send("Application is Healthy");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
