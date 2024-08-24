from fastapi import FastAPI,HTTPException, status, Depends
from backend.schema.User import UserSignUp, UserLogIn
from backend.hashing import bcrypt, verify
from backend.schema.Product import Product
from backend.utility.database import get_users_collection, get_product_collection
from backend.utility.oauth import get_current_user
from dotenv import load_dotenv
from backend.utility.jwttoken import create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES
from fastapi.security import OAuth2PasswordRequestForm
from pymongo.collection import Collection
from fastapi.middleware.cors import CORSMiddleware
# from fastapi.security import
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load environment variables from .env file
load_dotenv()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Replace with your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# **********************************************
# home page API
@app.get("/")
def main():
    return {'message':'Website is ready'}


# **********************************************
# sign-up API
@app.post("/sign_up")
def sign_up(request: UserSignUp,
            users_collection: Collection = Depends(get_users_collection)):
    user_name = request.user_name
    password = request.password

    user = users_collection.find_one({"user_name":user_name})

    if user:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,detail=f"User with {user_name} already exist.")
    hashed_password = bcrypt(password)
    user_object = dict(request)
    user_object["password"] = hashed_password
    user_id =  users_collection.insert_one(user_object).inserted_id
    return {"message":f"User created with user id: {user_id}"}

# **********************************************
# # log-in API

def get_user(users_collection, username: str):
    user = users_collection.find_one({"user_name":username})
    return user

def authenticate_user(users_collection, username: str, password: str):
    user = get_user(users_collection, username)
    print(password,user["password"])
    if not user:
        return False
    if not verify(password, user["password"]):
        return False
    return user

@app.post("/token")
async def login(request: OAuth2PasswordRequestForm = Depends(),
                users_collection: Collection = Depends(get_users_collection)):
    user = authenticate_user(users_collection, request.username, request.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Incorrect username or password", headers={"WWW-Authenticate": "Bearer"})
    access_token = create_access_token(
        data={"sub": user["user_name"]})
    return {"access_token": access_token, "token_type": "bearer"}
# **********************************************


# **********************************************
# product API
@app.post("/product", response_model=dict)
def create_product(prod:Product,
                   current_user: dict = Depends(get_current_user),
                   product_collection: Collection = Depends(get_product_collection)):
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
    try:
        result = product_collection.insert_one(product)
        if result.inserted_id:
            return {"message":"Product added Successfully","product_id": str(result.inserted_id)}
        else:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,detail="Failed to Add Product")
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,detail=str(e)) 
    
    

