from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime,timezone
from .database import collection
from .config import settings
from .utils.security import hash_password
from .routers import auth,tracking,shipments,quotes,pickups,customers,destinations,dashboard,contact

app=FastAPI(title="RR International API",version="1.0.0")
app.add_middleware(CORSMiddleware,allow_origins=settings.allowed_origins,allow_credentials=True,allow_methods=["*"],allow_headers=["*"])
for r in [auth.router,tracking.router,shipments.router,quotes.router,pickups.router,customers.router,destinations.router,dashboard.router,contact.router]: app.include_router(r,prefix="/api")

@app.get("/")
def root(): return {"name":"RR International API","status":"ok"}

def ensure_indexes():
    collection("enquiries").create_index("email")
    collection("enquiries").create_index("created_at")
    collection("enquiries").create_index("status")
    collection("quotes").create_index("email")
    collection("quotes").create_index("created_at")
    collection("quotes").create_index("status")


def seed():
    users=collection("users")
    if not users.find_one({"email":settings.admin_email}):
        users.insert_one({"email":settings.admin_email,"password_hash":hash_password(settings.admin_password),"role":"ADMIN"})
    if collection("destinations").count_documents({})==0:
        collection("destinations").insert_many([
            {"country":"United Kingdom","code":"UK","active":True},{"country":"United Arab Emirates","code":"UAE","active":True},
            {"country":"United States","code":"USA","active":True},{"country":"Singapore","code":"SG","active":True}
        ])
    if collection("shipments").count_documents({})==0:
        now=datetime.now(timezone.utc).isoformat()
        collection("shipments").insert_many([
            {"awb":"RR26HYD000123","shipment_type":"PARCEL","origin":"Hyderabad, India","destination":"London, UK","current_location":"Hyderabad, India","status":"IN_TRANSIT","estimated_delivery":"2026-09-10","weight_kg":2.5,"package_count":1,"flight_number":"RR901","last_updated":now,"tracking_history":[
                {"status":"BOOKING_CONFIRMED","location":"Hyderabad, India","description":"Booking confirmed","timestamp":now},{"status":"PICKED_UP","location":"Hyderabad, India","description":"Shipment collected","timestamp":now},{"status":"IN_TRANSIT","location":"Hyderabad, India","description":"Shipment is in transit","timestamp":now}]},
            {"awb":"RR26HYD000124","shipment_type":"DOCUMENT","origin":"Hyderabad, India","destination":"Dubai, UAE","current_location":"Dubai, UAE","status":"DESTINATION_ARRIVED","estimated_delivery":"2026-09-07","weight_kg":0.8,"package_count":1,"flight_number":"RR903","last_updated":now,"tracking_history":[
                {"status":"BOOKING_CONFIRMED","location":"Hyderabad, India","description":"Booking confirmed","timestamp":now},{"status":"FLIGHT_DEPARTED","location":"Hyderabad, India","description":"Flight departed","timestamp":now},{"status":"DESTINATION_ARRIVED","location":"Dubai, UAE","description":"Shipment arrived at destination","timestamp":now}]}
        ])
ensure_indexes()
seed()
