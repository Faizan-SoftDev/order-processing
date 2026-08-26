async function loadDashboard() {
    const [users, orders, products] = await Promise.all([
        fetch("/api/users"),
        fetch("/api/orders"),
        fetch("/api/products")
    ]);

    return {
        users,
        orders,
        products
    };
}

module.exports = {
    loadDashboard
};
