from fastapi import APIRouter, Depends

from ..database import collection
from ..utils.security import current_admin

router = APIRouter(prefix="/dashboard", tags=["dashboard"])


@router.get("/stats")
def stats(_: str = Depends(current_admin)):
    return {
        key: collection(key).count_documents({})
        for key in ["shipments", "quotes", "enquiries", "pickups", "customers"]
    }
