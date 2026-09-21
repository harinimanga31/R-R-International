from datetime import datetime
from ..database import collection
def next_awb():
    y=datetime.now().strftime("%y")
    n=collection("counters").find_one_and_update({"_id":"awb"},{"$inc":{"value":1}},upsert=True,return_document=True)
    return f"RR{y}HYD{int(n['value']):06d}"
