from fastapi import APIRouter,Depends
from ..database import collection
from ..schemas.destination import DestinationCreate
from ..utils.security import current_admin
from ..services.shipment_service import serialize
router=APIRouter(prefix="/destinations",tags=["destinations"])
@router.get("")
def list_all(_:str=Depends(current_admin)):return [serialize(x) for x in collection("destinations").find().sort("country",1)]
@router.post("")
def create(data:DestinationCreate,_:str=Depends(current_admin)):
    r=collection("destinations").insert_one(data.model_dump());d=data.model_dump();d["_id"]=r.inserted_id;return serialize(d)
