const test = require("node:test");
const assert = require("node:assert");

const {
    getCustomerSummary
} = require("../problem_4_customer_summary");


test("getCustomerSummary should ignore pending orders and calculate paid totals", () => {
    const orders = [
        { id: 1, customer: "Aamir", amount: 1000, status: "paid" },
        { id: 2, customer: "Ali", amount: 500, status: "pending" },
        { id: 3, customer: "Aamir", amount: 700, status: "paid" }
    ];

    const expected = [
        { customer: "Aamir", total: 1700, orders: 2 }
    ];

    assert.deepStrictEqual(
        getCustomerSummary(orders),
        expected
    );
});
    test("getCustomerSummary should calculate totals for multiple customers", () => {
    const orders = [
        { id: 1, customer: "Ali", amount: 500, status: "paid" },
        { id: 2, customer: "Aamir", amount: 1000, status: "paid" },
        { id: 3, customer: "Ali", amount: 300, status: "paid" },
        { id: 4, customer: "Ahmed", amount: 700, status: "paid" },
        { id: 5, customer: "Aamir", amount: 500, status: "pending" }
    ];

    const expected = [
        { customer: "Ali", total: 800, orders: 2 },
        { customer: "Aamir", total: 1000, orders: 1 },
        { customer: "Ahmed", total: 700, orders: 1 }
    ];

    assert.deepStrictEqual(
        getCustomerSummary(orders),
        expected
    );
});
    test("getCustomerSummary should return an empty array for empty orders", () => {
    const result = getCustomerSummary([]);

    assert.deepStrictEqual(result, []);
});
    test("getCustomerSummary should return an empty array when all orders are pending", () => {
    const orders = [
        { id: 1, customer: "Aamir", amount: 1000, status: "pending" },
        { id: 2, customer: "Ali", amount: 500, status: "pending" },
        { id: 3, customer: "Ahmed", amount: 700, status: "pending" }
    ];

    const result = getCustomerSummary(orders);

    assert.deepStrictEqual(result, []);
});
    test("getCustomerSummary should count paid orders with zero amount", () => {
    const orders = [
        { id: 1, customer: "Aamir", amount: 0, status: "paid" },
        { id: 2, customer: "Aamir", amount: 500, status: "paid" }
    ];

    const expected = [
        { customer: "Aamir", total: 500, orders: 2 }
    ];

    assert.deepStrictEqual(
        getCustomerSummary(orders),
        expected
    );
});
    test("getCustomerSummary should preserve first-seen customer order", () => {
    const orders = [
        { id: 1, customer: "Ali", amount: 500, status: "paid" },
        { id: 2, customer: "Aamir", amount: 1000, status: "paid" },
        { id: 3, customer: "Ali", amount: 300, status: "paid" },
        { id: 4, customer: "Ahmed", amount: 700, status: "paid" }
    ];

    const expected = [
        { customer: "Ali", total: 800, orders: 2 },
        { customer: "Aamir", total: 1000, orders: 1 },
        { customer: "Ahmed", total: 700, orders: 1 }
    ];

    assert.deepStrictEqual(
        getCustomerSummary(orders),
        expected
    );
});