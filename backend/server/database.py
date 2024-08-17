import motor.motor_asyncio
from pymongo import MongoClient

# MONGO_DETAILS = "mongodb://localhost:27017"
client=MongoClient("mongodb+srv://OLX_Project:iTXdaSBaMQo1j2fV@cluster0.q0pye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

database = client.users

users_collection = database.get_collection("users_collection")
product_collection=database.get_collection("product_collection")

def user_helper(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        "hall_id": user["hall_id"],
        "contact_no":user["contact_no"],

    }