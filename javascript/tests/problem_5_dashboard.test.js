const test = require("node:test");
const assert = require("node:assert");

const { loadDashboard } = require("../problem_5_dashboard");

test("loadDashboard should fetch users, orders and products concurrently", async () => {
    const startTimes = {};

    global.fetch = async (url) => {
        startTimes[url] = Date.now();

        await new Promise(resolve => setTimeout(resolve, 100));

        return {
            url
        };
    };

    const result = await loadDashboard();

    assert.deepStrictEqual(result, {
        users: { url: "/api/users" },
        orders: { url: "/api/orders" },
        products: { url: "/api/products" }
    });

    const usersStart = startTimes["/api/users"];
    const ordersStart = startTimes["/api/orders"];
    const productsStart = startTimes["/api/products"];

    const latestStart = Math.max(
        usersStart,
        ordersStart,
        productsStart
    );

    const earliestStart = Math.min(
        usersStart,
        ordersStart,
        productsStart
    );

    assert.ok(
        latestStart - earliestStart < 50,
        "API requests should start concurrently"
    );
});

test("loadDashboard should call all three dashboard APIs", async () => {
    const calls = [];

    global.fetch = async (url) => {
        calls.push(url);

        return {
            url
        };
    };

    await loadDashboard();

    assert.deepStrictEqual(calls, [
        "/api/users",
        "/api/orders",
        "/api/products"
    ]);
});

test("loadDashboard should reject when an API request fails", async () => {
    global.fetch = async (url) => {
        if (url === "/api/orders") {
            throw new Error("Orders API failed");
        }

        return {
            url
        };
    };

    await assert.rejects(
        loadDashboard(),
        {
            message: "Orders API failed"
        }
    );
});
