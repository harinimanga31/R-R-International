from ..database import collection
from ..utils.security import verify_password,create_token
from ..config import settings
def authenticate(email,password):
    user=collection("users").find_one({"email":email})
    if user and verify_password(password,user["password_hash"]): return create_token(email)
    return None
