
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Welcome! My Node.js application is running on Azure App Service.");
});

app.get("/health", (req, res) => {
    res.status(200).send("Application is Healthy");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
