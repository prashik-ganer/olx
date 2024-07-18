from pydantic import BaseModel


class UserDetails(BaseModel):
    name: str
    email: str
    password: str

class UserLogIn(BaseModel):
    email: str
    password: str


