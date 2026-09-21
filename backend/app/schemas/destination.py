from pydantic import BaseModel
class DestinationCreate(BaseModel): country:str;code:str;active:bool=True
