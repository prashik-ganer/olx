from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
uri = "mongodb+srv://sanjivk241:Sanjeevk241@olx1.byrgdqf.mongodb.net/?retryWrites=true&w=majority&appName=OLX1"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client.todo_db
collections = db["users"]