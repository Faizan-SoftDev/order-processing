import unittest

from python.problem_2_unique_users import get_unique_users


class TestGetUniqueUsers(unittest.TestCase):

    def test_returns_unique_ids(self):
        users = [
            {"id": 1, "name": "Aamir"},
            {"id": 2, "name": "Ali"},
            {"id": 1, "name": "Aamir"},
            {"id": 3, "name": "Ahmed"},
        ]

        expected = [1, 2, 3]

        self.assertEqual(get_unique_users(users), expected)

    def test_empty_users(self):
        users = []

        expected = []

        self.assertEqual(get_unique_users(users), expected)

    def test_all_users_are_unique(self):
        users = [
            {"id": 1, "name": "Aamir"},
            {"id": 2, "name": "Ali"},
            {"id": 3, "name": "Ahmed"},
        ]

        expected = [1, 2, 3]

        self.assertEqual(get_unique_users(users), expected)

    def test_preserves_first_seen_order(self):
        users = [
            {"id": 3, "name": "Ahmed"},
            {"id": 1, "name": "Aamir"},
            {"id": 3, "name": "Ahmed"},
            {"id": 2, "name": "Ali"},
            {"id": 1, "name": "Aamir"},
        ]

        expected = [3, 1, 2]

        self.assertEqual(get_unique_users(users), expected)
        def test_supports_different_hashable_id_types(self):
            users = [
                {"id": 1, "name": "Aamir"},
                {"id": "1", "name": "Ali"},
                {"id": 1, "name": "Aamir"},
            ]
    
            expected = [1, "1"]
    
            self.assertEqual(get_unique_users(users), expected)
        


if __name__ == "__main__":
    unittest.main()