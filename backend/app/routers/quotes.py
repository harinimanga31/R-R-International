from datetime import datetime, timezone

from bson import ObjectId
from fastapi import APIRouter, Depends, HTTPException

from ..database import collection
from ..schemas.quote import QuoteCreate, QuoteUpdate
from ..services.email_service import send_quote_notification
from ..services.quote_service import new_id
from ..services.shipment_service import serialize
from ..utils.security import current_admin

router = APIRouter(prefix="/quotes", tags=["quotes"])


@router.post("")
def create(data: QuoteCreate):
    quote_id = new_id("RRQ")
    created_at = datetime.now(timezone.utc).isoformat()
    doc = data.model_dump() | {
        "quote_id": quote_id,
        "status": "Pending",
        "created_at": created_at,
    }

    result = collection("quotes").insert_one(doc)
    doc["id"] = str(result.inserted_id)

    try:
        send_quote_notification(doc)
    except Exception as exc:
        # Keep the request in MongoDB, but never tell the customer the whole
        # flow succeeded when the required owner email notification failed.
        raise HTTPException(
            status_code=503,
            detail="Your quote request was saved, but the owner notification could not be sent. Please try again later.",
        ) from exc

    return {
        "success": True,
        "id": doc["id"],
        "quote_id": quote_id,
        "status": doc["status"],
    }


@router.get("")
def list_all(_: str = Depends(current_admin)):
    return [serialize(x) for x in collection("quotes").find().sort("created_at", -1)]


@router.put("/{id}")
def update(id: str, data: QuoteUpdate, _: str = Depends(current_admin)):
    try:
        object_id = ObjectId(id)
    except Exception as exc:
        raise HTTPException(400, "Invalid quote ID") from exc

    r = collection("quotes").update_one({"_id": object_id}, {"$set": data.model_dump()})
    if not r.matched_count:
        raise HTTPException(404, "Quote not found")
    return {"success": True}
