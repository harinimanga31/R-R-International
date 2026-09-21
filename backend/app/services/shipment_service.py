from datetime import datetime,timezone
def now(): return datetime.now(timezone.utc).isoformat()
def serialize(d):
    d=dict(d);d["id"]=str(d.pop("_id"));return d
