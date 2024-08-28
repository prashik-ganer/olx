from pymongo import MongoClient
from pymongo.collection import Collection
import os


db_url = os.getenv("MONGODB_URL")
print(db_url)
client=MongoClient(db_url)

database = client.campus_connect



def get_product_collection()->Collection:
    product_collection = database["products"]
    return  product_collection

def get_users_collection()->Collection:
    users_collection = database["users"]
    return  users_collection


def user_helper(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        "hall_id": user["hall_id"],
        "contact_no":user["contact_no"],

    }