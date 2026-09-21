from fastapi import APIRouter,Depends
from ..database import collection
from ..schemas.customer import CustomerCreate
from ..utils.security import current_admin
from ..services.shipment_service import serialize
router=APIRouter(prefix="/customers",tags=["customers"])
@router.get("")
def list_all(_:str=Depends(current_admin)):return [serialize(x) for x in collection("customers").find().sort("created_at",-1)]
@router.post("")
def create(data:CustomerCreate,_:str=Depends(current_admin)):
    from datetime import datetime,timezone
    d=data.model_dump()|{"created_at":datetime.now(timezone.utc).isoformat()}
    r=collection("customers").insert_one(d);d["_id"]=r.inserted_id;return serialize(d)
