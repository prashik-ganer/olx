import motor.motor_asyncio

MONGO_DETAILS = "mongodb://localhost:27017"
uri = "mongodb+srv://sanjivk241:Sanjeevk241@olx1.byrgdqf.mongodb.net/?retryWrites=true&w=majority&appName=OLX1"
client = motor.motor_asyncio.AsyncIOMotorClient(uri)

database = client.users

users_collection = database.get_collection("users_collection")

def user_helper(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        "hall_id": user["hall_id"],
        "contact_no":user["contact_no"],

    }