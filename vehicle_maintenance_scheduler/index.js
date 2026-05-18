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

        let result = optimizeSchedule(tasks, maxHours);

        await Log(
            "backend",
            "info",
            "service",
            "schedule optimized"
        );

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (err) {

        console.log(err);

        await Log(
            "backend",
            "error",
            "service",
            err.message
        );

        res.status(500).json({
            success: false,
            message: "server error"
        });
    }

});

app.listen(3000, () => {

    console.log("server started on port 3000");

});