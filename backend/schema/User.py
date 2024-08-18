from pydantic import BaseModel, Field, field_validator
from typing import Annotated, Optional
import re

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