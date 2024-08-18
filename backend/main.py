from fastapi import FastAPI,HTTPException, status, Depends
from backend.schema.User import UserSignUp, UserLogIn
from backend.hashing import Hash
from backend.server.models.Product import Product
from backend.utility.database import users_collection,product_collection
from backend.utility.oauth import get_current_user
from dotenv import load_dotenv
from backend.utility.jwttoken import create_access_token

app = FastAPI()

# Load environment variables from .env file
load_dotenv()

# **********************************************
# home page API
@app.get("/")
def main():
    return {'message':'Website is ready'}


# **********************************************
# sign-up API
@app.post("/sign_up")
def sign_up(request: UserSignUp):
    user_name = request.user_name
    password = request.password

    user = users_collection.find_one({"user_name":user_name})

    if user:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,detail=f"User with {user_name} already exist.")
    hashed_password = Hash.hash_password(password)
    user_object = dict(request)
    user_object["password"] = hashed_password
    user_id =  users_collection.insert_one(user_object).inserted_id
    return {"message":f"User created with user id: {user_id}"}


# **********************************************


# log-in API
@app.post("/log-in")
def log_in(request: UserLogIn):
    user_name = request.user_name
    password = request.password
    print(user_name)
    user =  users_collection.find_one({"user_name": user_name})

    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"User not found with {user_name}")

    if not Hash.verify_password(user["password"],password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Wrong Username or Password")
    access_token = create_access_token(data={"sub":user_name})
    return {"access_token" : access_token, "token_type": "bearer"}


products = []

# **********************************************
# product API
@app.post("/product")
def create_product(prod:Product,current_user: dict = Depends(get_current_user)):
    product={
        "product_name" : prod.product_name,
        "category" : prod.category,
        "price" : prod.price,
        "negotiable" : prod.negotiable,
        "image_paths" : prod.image_paths,
        "short_description" : prod.short_description,
        "product_age": prod.product_age,
        "cost_price": prod.cost_price,
        "user_id": current_user["_id"]
    }
    product_collection.insert_one(product)
    return {"message":"Product added Successfully"}

