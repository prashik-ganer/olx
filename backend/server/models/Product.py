from pydantic import BaseModel, Field, field_validator
import re
from typing import Annotated

class Product(BaseModel):
    product_name:str
    category:str
    price:str
    negotiable:bool
    image:str
    short_description:str
    product_age:str
    

