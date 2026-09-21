from fastapi import APIRouter,HTTPException
from ..schemas.auth import LoginRequest,Token
from ..services.auth_service import authenticate
router=APIRouter(prefix="/auth",tags=["auth"])
@router.post("/login",response_model=Token)
def login(data:LoginRequest):
    token=authenticate(data.email,data.password)
    if not token: raise HTTPException(401,"Invalid credentials")
    return {"access_token":token,"token_type":"bearer"}
