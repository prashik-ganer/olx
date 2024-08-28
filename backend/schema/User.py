from pydantic import BaseModel
from typing import  Optional

class UserSignUp(BaseModel):
    user_name: str
    email: str
    hall_id: str
    contact_no: str
    password: str

class UserLogIn(BaseModel):
    user_name: str
    password: str

class TokenData(BaseModel):
    user_name: Optional[str] = None

class Token(BaseModel):
    access_token: str
    token_type: str