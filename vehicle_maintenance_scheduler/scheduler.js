function optimizeSchedule(tasks, maxHours) {

    let n = tasks.length;

    let dp = Array(n + 1)
        .fill()
        .map(() => Array(maxHours + 1).fill(0));

    for (let i = 1; i <= n; i++) {

        let duration = tasks[i - 1].estimatedDurationHours;

        let impact = tasks[i - 1].impactScore;

        for (let h = 0; h <= maxHours; h++) {

            if (duration <= h) {

                dp[i][h] = Math.max(
                    impact + dp[i - 1][h - duration],
                    dp[i - 1][h]
                );

            } else {

                dp[i][h] = dp[i - 1][h];
            }
        }
    }

    let selectedVehicles = [];

    let h = maxHours;

    for (let i = n; i > 0; i--) {

        if (dp[i][h] !== dp[i - 1][h]) {

            selectedVehicles.push(tasks[i - 1]);

            h = h - tasks[i - 1].estimatedDurationHours;
        }
    }

    return {
        maxImpact: dp[n][maxHours],
        selectedVehicles: selectedVehicles
    };
}

module.exports = optimizeSchedule;