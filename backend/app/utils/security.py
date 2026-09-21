from datetime import datetime,timedelta,timezone
from jose import jwt,JWTError
from passlib.context import CryptContext
from fastapi import Depends,HTTPException,status
from fastapi.security import OAuth2PasswordBearer
from ..config import settings
pwd=CryptContext(schemes=["bcrypt"],deprecated="auto")
oauth2=OAuth2PasswordBearer(tokenUrl="/api/auth/login")
def hash_password(p:str)->str:return pwd.hash(p)
def verify_password(p:str,h:str)->bool:return pwd.verify(p,h)
def create_token(subject:str)->str:return jwt.encode({"sub":subject,"exp":datetime.now(timezone.utc)+timedelta(minutes=settings.jwt_expire_minutes)},settings.jwt_secret,algorithm="HS256")
def current_admin(token:str=Depends(oauth2)):
    try: sub=jwt.decode(token,settings.jwt_secret,algorithms=["HS256"]).get("sub")
    except JWTError: sub=None
    if not sub: raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Invalid or expired token")
    return sub
