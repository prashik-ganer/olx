from pydantic import BaseModel, Field, field_validator
import re
from typing import Annotated


class UserDetails(BaseModel):
    name: str
    email: Annotated[str, Field(pattern=r".*@iitk\.ac\.in$")]
    hall_id: str
    contact_no: Annotated[str, Field(min_length=10, max_length=10)]
    password: Annotated[str, Field(min_length=8)]

    @field_validator('contact_no')
    @classmethod
    def validate_contact_no(cls, v: str) -> str:
        if not v.isdigit():
            raise ValueError('Contact number must contain only digits')
        return v

    @field_validator('password')
    @classmethod
    def validate_password(cls, v: str) -> str:
        if not re.match(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$', v):
            raise ValueError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character')
        return v

    @field_validator('email')
    @classmethod
    def validate_email_domain(cls, v: str) -> str:
        if not v.endswith("@iitk.ac.in"):
            raise ValueError('Email must end with @iitk.ac.in')
        return v

class UserLogIn(BaseModel):
    email: str
    password: str


