from fastapi import FastAPI,HTTPException, status
from server.models.UserDetails import UserDetails, UserLogIn
from server.models.Product import Product
from server.database import users_collection,product_collection
from functions import hash_password, verify_password
from typing import List, Optional
app = FastAPI()

users=  [] # for storing users in memory

# **********************************************
# home page API
@app.get("/")
def main():
    return {'message':'Website is ready'}


# **********************************************
# sign-up API
@app.post("/sign-up")
def sign_up(user: UserDetails):
    # Check if the user already exists
    for existing_user in users:
        if existing_user['email'] == user.email:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered"
            )
    
    # Hash the user's password
    hashed_password = hash_password(user.password)
    
    # Create user object and append to the users list
    user_object = {
        "username": user.name,
        "email": user.email,
        "hall_id": user.hall_id,
        "contact_no": user.contact_no,
        "password": hashed_password,
    }
    users.append(user_object)
    return {'message': 'User created successfully'}


# **********************************************
# log-in API
@app.post("/log-in")
def log_in(request: UserLogIn):
    email = request.email
    password = request.password
    
    # Find the user by email j
    for user in users:
        if user['email'] == email:
            # Verify the password
            if verify_password(user['password'], password):
                return {'message': 'User logged in successfully'}
            else:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Invalid credentials"
                )
    
    # If user is not found
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials"
    )


products = []

# **********************************************
# product API
@app.post("/product")
def create_product(prod:Product):
    product={
        "product_name" : prod.product_name,
        "category" : prod.category,
        "price" : prod.price,
        "negotiable" : prod.negotiable,
        "image_paths" : prod.image_paths,
        "short_description" : prod.short_description,
        "product_age": prod.product_age,
        "cost_price": prod.cost_price,
        "user_id": prod.user_id
    }
    product_collection.insert_one(product)
    return {"message":"Product added Successfully"}


@app.get("/products")
async def get_products(user_id: Optional[str] = None):
    query = {}
    if user_id is not None:
        users['user_id'] = user_id

    products_cursor = product_collection.find(query)
    products_list = await products_cursor.to_list(length=None)

    if not products_list:
        if user_id is not None:
            raise HTTPException(
                status_code=404,
                detail="No products found for this user"
            )
        return {"products": []}

    return {"products": products_list}
