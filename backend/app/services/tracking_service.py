from ..database import collection
from ..services.shipment_service import serialize
def get_awb(awb):
    d=collection("shipments").find_one({"awb":awb})
    if not d:return None
    return serialize(d)
