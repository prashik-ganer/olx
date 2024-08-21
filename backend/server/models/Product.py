from pydantic import BaseModel, Field, field_validator, FilePath
import re
from typing import Annotated, List

class Product(BaseModel):
    product_name:str
    category:str
    price:float
    negotiable:bool
    image_paths:str
    short_description:Annotated[str,Field(title="short description")]
    product_age:Annotated[str,Field(title="Approximate age of the product")]
    cost_price:Annotated[float,Field(title="Price on which you bought the product")]
    user_id:str

    