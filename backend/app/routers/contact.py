from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException

from ..database import collection
from ..schemas.contact import ContactCreate
from ..services.email_service import send_enquiry_notification
from ..utils.security import current_admin

router = APIRouter(tags=["contact"])


def _create_enquiry(data: ContactCreate):
    created_at = datetime.now(timezone.utc).isoformat()
    doc = data.model_dump() | {
        "status": "New",
        "created_at": created_at,
    }

    result = collection("enquiries").insert_one(doc)
    doc["id"] = str(result.inserted_id)

    try:
        send_enquiry_notification(
            name=doc["name"],
            email=str(doc["email"]),
            phone=doc["phone"],
            subject=doc["subject"],
            message_text=doc["message"],
            created_at=created_at,
        )
    except Exception as exc:
        # The enquiry is intentionally retained in MongoDB, but the consumer
        # receives an error instead of a false success response.
        raise HTTPException(
            status_code=503,
            detail="Your enquiry was saved, but the owner notification could not be sent. Please try again later.",
        ) from exc

    return {"success": True, "id": doc["id"], "status": doc["status"]}


@router.post("/contact")
@router.post("/enquiries")
def create_contact(data: ContactCreate):
    return _create_enquiry(data)


@router.get("/enquiries")
def list_enquiries(_: str = Depends(current_admin)):
    rows = collection("enquiries").find().sort("created_at", -1)
    return [
        {
            "id": str(row["_id"]),
            **{key: value for key, value in row.items() if key != "_id"},
        }
        for row in rows
    ]
