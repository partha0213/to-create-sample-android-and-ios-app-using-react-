import os
from motor.motor_asyncio import AsyncIOMotorClient

class MongoDBConfig:
    def __init__(self):
        # Get the MongoDB connection details from environment variables or use defaults
        self.MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
        self.DATABASE_NAME = os.getenv("DATABASE_NAME", "marine_db")

    def get_database(self):
        client = AsyncIOMotorClient(self.MONGODB_URI)
        return client[self.DATABASE_NAME]

# Singleton instance of the MongoDB configuration
mongodb_config = MongoDBConfig()

def get_db():
    return mongodb_config.get_database()
