from fastapi import APIRouter,Depends,HTTPException
from datetime import datetime,timezone
from ..database import collection
from ..schemas.shipment import ShipmentCreate,TrackingEventCreate
from ..utils.security import current_admin
from ..utils.awb import next_awb
from ..services.shipment_service import serialize
router=APIRouter(prefix="/shipments",tags=["shipments"])
@router.get("")
def list_all(_:str=Depends(current_admin)): return [serialize(x) for x in collection("shipments").find().sort("last_updated",-1)]
@router.post("")
def create(data:ShipmentCreate,_:str=Depends(current_admin)):
    awb=next_awb();now=datetime.now(timezone.utc).isoformat()
    d=data.model_dump()|{"awb":awb,"last_updated":now,"tracking_history":[{"status":data.status,"location":data.current_location,"description":"Shipment created","timestamp":now}]}
    r=collection("shipments").insert_one(d);d["_id"]=r.inserted_id;return serialize(d)
@router.put("/{id}")
def update(id:str,data:ShipmentCreate,_:str=Depends(current_admin)):
    from bson import ObjectId
    d=data.model_dump()|{"last_updated":datetime.now(timezone.utc).isoformat()}
    r=collection("shipments").update_one({"_id":ObjectId(id)},{"$set":d})
    if not r.matched_count:raise HTTPException(404,"Shipment not found")
    return {"success":True}
@router.delete("/{id}")
def delete(id:str,_:str=Depends(current_admin)):
    from bson import ObjectId
    collection("shipments").delete_one({"_id":ObjectId(id)});return {"success":True}
@router.post("/{id}/events")
def event(id:str,data:TrackingEventCreate,_:str=Depends(current_admin)):
    from bson import ObjectId
    now=datetime.now(timezone.utc).isoformat();ev=data.model_dump()|{"timestamp":now}
    r=collection("shipments").update_one({"_id":ObjectId(id)},{"$set":{"status":data.status,"current_location":data.location,"last_updated":now},"$push":{"tracking_history":ev}})
    if not r.matched_count:raise HTTPException(404,"Shipment not found")
    return {"success":True}
