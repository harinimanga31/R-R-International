from pydantic import BaseModel,Field,EmailStr
class PickupCreate(BaseModel):
    customer_name:str;phone:str;email:EmailStr;pickup_address:str;city:str;postal_code:str;shipment_type:str
    weight_kg:float=Field(gt=0);package_count:int=Field(gt=0);preferred_date:str;preferred_time:str;special_instructions:str|None=None
class PickupUpdate(BaseModel): status:str;special_instructions:str|None=None
