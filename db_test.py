import os
import mysql.connector
from dotenv import load_dotenv

load_dotenv()

try:
    mydb = mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME")
    )

    cursor = mydb.cursor()

    # 1. Table create karein (agar pehle se nahi bana)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100)
        )
    """)
    print("Table ready ho gaya hai!")

    # 2. Data insert karein
    sql = "INSERT INTO users (name, email) VALUES (%s, %s)"
    val = ("Faizan Khan", "faizan@example.com")
    cursor.execute(sql, val)
    mydb.commit()  # Data save karne ke liye commit zaroori hai
    print(f"Record inserted with ID: {cursor.lastrowid}")

    # 3. Data fetch karke display karein
    cursor.execute("SELECT * FROM users")
    result = cursor.fetchall()

    print("\n--- Database Users ---")
    for row in result:
        print(row)

except mysql.connector.Error as err:
    print("Error:", err)

finally:
    if 'mydb' in locals() and mydb.is_connected():
        cursor.close()
        mydb.close()