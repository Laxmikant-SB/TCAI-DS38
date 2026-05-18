const axios = require("axios");

async function Log(stack, level, pkg, message) {

    const token = "YOUR_TOKEN";

    try {

        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: pkg,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        console.log("log added");

    } catch (err) {

        console.log("unable to create log");

    }
}

module.exports = Log;