from fastapi import APIRouter,HTTPException
from ..services.tracking_service import get_awb
router=APIRouter(prefix="/tracking",tags=["tracking"])
@router.get("/{awb}")
def tracking(awb:str):
    d=get_awb(awb)
    if not d: raise HTTPException(404,"Shipment not found")
    return d
