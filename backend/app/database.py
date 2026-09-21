from pymongo import MongoClient
from .config import settings
client = MongoClient(settings.mongodb_url)
db = client[settings.mongodb_db]
def collection(name: str): return db[name]
