import motor.motor_asyncio
from pymongo import MongoClient

DATABASE_URL = "mongodb://localhost:27017"
client = motor.motor_asyncio.AsyncIOMotorClient(DATABASE_URL)
db = client["marine_db"]

def get_db():
    return db
