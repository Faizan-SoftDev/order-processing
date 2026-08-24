def get_unique_users(users):
    seen = set()
    result = []

    for user in users:
        user_id = user["id"]

        if user_id not in seen:
            seen.add(user_id)
            result.append(user_id)

    return result


def main():
    users = [
        {"id": 1, "name": "Aamir"},
        {"id": 2, "name": "Ali"},
        {"id": 1, "name": "Aamir"},
        {"id": 3, "name": "Ahmed"},
    ]

    result = get_unique_users(users)

    print("Unique user IDs:", result)


if __name__ == "__main__":
    main()