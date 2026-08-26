const { getCustomerSummary } = require("./problem_4_customer_summary");

const orders = [
    { id: 1, customer: "Aamir", amount: 1200, status: "paid" },
    { id: 2, customer: "Ali", amount: 500, status: "pending" },
    { id: 3, customer: "Aamir", amount: 800, status: "paid" },
    { id: 4, customer: "Ahmed", amount: 1500, status: "paid" },
    { id: 5, customer: "Ali", amount: 700, status: "paid" }
];

const result = getCustomerSummary(orders);

console.log("Customer Summary:");
console.log(result);