from fastapi import APIRouter,Depends,HTTPException
from datetime import datetime,timezone
from ..database import collection
from ..schemas.pickup import PickupCreate,PickupUpdate
from ..utils.security import current_admin
from ..services.quote_service import new_id
from ..services.shipment_service import serialize
router=APIRouter(prefix="/pickups",tags=["pickups"])
@router.post("")
def create(data:PickupCreate):
    pid=new_id("RRP");d=data.model_dump()|{"pickup_id":pid,"status":"NEW","created_at":datetime.now(timezone.utc).isoformat()}
    r=collection("pickups").insert_one(d);return {"id":str(r.inserted_id),"pickup_id":pid}
@router.get("")
def list_all(_:str=Depends(current_admin)):return [serialize(x) for x in collection("pickups").find().sort("created_at",-1)]
@router.put("/{id}")
def update(id:str,data:PickupUpdate,_:str=Depends(current_admin)):
    from bson import ObjectId
    r=collection("pickups").update_one({"_id":ObjectId(id)},{"$set":data.model_dump()})
    if not r.matched_count:raise HTTPException(404,"Pickup not found")
    return {"success":True}
