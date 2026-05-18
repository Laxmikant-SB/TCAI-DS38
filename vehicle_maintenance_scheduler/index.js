const express = require("express");

const optimizeSchedule = require("./scheduler");

const Log = require("./logger");

const app = express();

app.get("/optimize", async (req, res) => {

    try {

        const tasks = [
            {
                vehicleId: "V1",
                estimatedDurationHours: 3,
                impactScore: 40
            },
            {
                vehicleId: "V2",
                estimatedDurationHours: 4,
                impactScore: 50
            },
            {
                vehicleId: "V3",
                estimatedDurationHours: 2,
                impactScore: 30
            }
        ];

        let maxHours = 5;

        let result = optimizeSchedule(tasks, maxHours);

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