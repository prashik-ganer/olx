from pymongo import MongoClient
import os


db_url = os.getenv("MONGODB_URL")
print(db_url)
client=MongoClient(db_url)

database = client.campus_connect

users_collection = database["users"]
product_collection = database["products"]

def user_helper(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        "hall_id": user["hall_id"],
        "contact_no":user["contact_no"],

    }