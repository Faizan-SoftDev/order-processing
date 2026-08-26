function getCustomerSummary(orders) {
    const summary = new Map();

    for (const order of orders) {
        if (order.status !== "paid") {
            continue;
        }

        if (!summary.has(order.customer)) {
            summary.set(order.customer, {
                customer: order.customer,
                total: 0,
                orders: 0
            });
        }

        const customerSummary = summary.get(order.customer);

        customerSummary.total += order.amount;
        customerSummary.orders += 1;
    }

    return Array.from(summary.values());
}


module.exports = {
    getCustomerSummary
};
