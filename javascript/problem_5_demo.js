const { loadDashboard } = require("./problem_5_dashboard");

global.fetch = async (url) => {
    console.log(`Fetching: ${url}`);

    return {
        url,
        status: 200
    };
};

loadDashboard()
    .then((result) => {
        console.log("\nDashboard loaded:");
        console.log(result);
    })
    .catch((error) => {
        console.error("Dashboard failed:", error.message);
    });
