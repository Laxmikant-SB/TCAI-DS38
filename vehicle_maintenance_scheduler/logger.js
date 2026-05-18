async function Log(stack, level, pkg, message) {

    let logData = {
        stack,
        level,
        package: pkg,
        message,
        time: new Date()
    };

    console.log(logData);

}

module.exports = Log;