const express = require("express");

const Log = require("./logger");

const app = express();

app.get("/", async (req, res) => {

    await Log(
        "backend",
        "info",
        "route",
        "main route called"
    );

    res.send("working");
});

app.listen(3000, () => {
    console.log("server started");
});