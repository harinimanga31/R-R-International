from pydantic import BaseModel,Field
class ShipmentCreate(BaseModel):
    shipment_type:str="PARCEL"; origin:str; destination:str; current_location:str
    status:str="BOOKING_CONFIRMED"; estimated_delivery:str|None=None; weight_kg:float=Field(gt=0); package_count:int=Field(gt=0); flight_number:str|None=None
class TrackingEventCreate(BaseModel): status:str; location:str; description:str
