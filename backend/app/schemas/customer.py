from pydantic import BaseModel,EmailStr
class CustomerCreate(BaseModel): name:str;phone:str|None="";email:EmailStr|None=None;company:str|None="";address:str|None=""
