def get_customer_summary(orders):
    summary = {}

    for order in orders:
        if order["status"] != "paid":
            continue

        customer = order["customer"]

        if customer not in summary:
            summary[customer] = {
                "total": order["amount"],
                "orders": 1
            }
        else:
            summary[customer]["total"] += order["amount"]
            summary[customer]["orders"] += 1

    result = []

    for customer, data in summary.items():
        result.append({
            "customer": customer,
            "total": data["total"],
            "orders": data["orders"]
        })

    result.sort(key=lambda item: item["total"], reverse=True)

    return result


if __name__ == "__main__":
    orders = [
        {"id": 1, "customer": "Aamir", "amount": 1200, "status": "paid"},
        {"id": 2, "customer": "Ali", "amount": 500, "status": "pending"},
        {"id": 3, "customer": "Aamir", "amount": 800, "status": "paid"},
        {"id": 4, "customer": "Ahmed", "amount": 1500, "status": "paid"},
        {"id": 5, "customer": "Ali", "amount": 700, "status": "paid"},
    ]

    result = get_customer_summary(orders)

    print(result)