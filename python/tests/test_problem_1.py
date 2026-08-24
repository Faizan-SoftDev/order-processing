import unittest

from python.problem_1_order_processing import get_customer_summary


class TestGetCustomerSummary(unittest.TestCase):

    def test_normal_case(self):
        orders = [
            {"id": 1, "customer": "Aamir", "amount": 1200, "status": "paid"},
            {"id": 2, "customer": "Ali", "amount": 500, "status": "pending"},
            {"id": 3, "customer": "Aamir", "amount": 800, "status": "paid"},
            {"id": 4, "customer": "Ahmed", "amount": 1500, "status": "paid"},
            {"id": 5, "customer": "Ali", "amount": 700, "status": "paid"},
        ]

        expected = [
            {"customer": "Aamir", "total": 2000, "orders": 2},
            {"customer": "Ahmed", "total": 1500, "orders": 1},
            {"customer": "Ali", "total": 700, "orders": 1},
        ]

        self.assertEqual(get_customer_summary(orders), expected)

    def test_sorts_by_total_descending(self):
        orders = [
            {"id": 1, "customer": "Ali", "amount": 700, "status": "paid"},
            {"id": 2, "customer": "Aamir", "amount": 2000, "status": "paid"},
            {"id": 3, "customer": "Ahmed", "amount": 1500, "status": "paid"},
        ]

        expected = [
            {"customer": "Aamir", "total": 2000, "orders": 1},
            {"customer": "Ahmed", "total": 1500, "orders": 1},
            {"customer": "Ali", "total": 700, "orders": 1},
        ]

        self.assertEqual(get_customer_summary(orders), expected)

    def test_empty_orders(self):
        orders = []

        expected = []

        self.assertEqual(get_customer_summary(orders), expected)

    def test_all_orders_pending(self):
        orders = [
            {"id": 1, "customer": "Aamir", "amount": 1200, "status": "pending"},
            {"id": 2, "customer": "Ali", "amount": 500, "status": "pending"},
        ]

        expected = []

        self.assertEqual(get_customer_summary(orders), expected)

    def test_multiple_paid_orders_for_same_customer(self):
        orders = [
            {"id": 1, "customer": "Aamir", "amount": 100, "status": "paid"},
            {"id": 2, "customer": "Aamir", "amount": 200, "status": "paid"},
            {"id": 3, "customer": "Aamir", "amount": 300, "status": "paid"},
        ]

        expected = [
            {"customer": "Aamir", "total": 600, "orders": 3}
        ]

        self.assertEqual(get_customer_summary(orders), expected)


if __name__ == "__main__":
    unittest.main()