const express = require("express");

const optimizeSchedule = require("./scheduler");

const Log = require("./logger");

const app = express();
app.use(express.json());
app.post("/optimize", async (req, res) => {

    try {

        const tasks = req.body.tasks;

        const maxHours = req.body.availableHours;

        if (!tasks || !maxHours) {

            return res.status(400).json({
                success: false,
                message: "invalid input"
            });
        }
        await Log(
            "backend",
            "info",
            "service",
            "schedule optimized"
        );

        res.json({
            success: true,
            data: result
        });

    } catch (err) {

        await Log(
            "backend",
            "error",
            "service",
            "error in optimization"
        );

        res.status(500).json({
            success: false,
            message: "server error"
        });
    }

});

app.listen(3000, () => {

    console.log("server started");

});