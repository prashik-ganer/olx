
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from backend.utility.jwttoken import verify_token
from backend.utility.database import get_users_collection
from pymongo.collection import Collection



oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
def get_current_user(token: str = Depends(oauth2_scheme),
                     users_collection: Collection = Depends(get_users_collection)):
    credentials_exception = HTTPException(
        status_code= status.HTTP_401_UNAUTHORIZED,
        detail = "Could not validate credentials",
        headers={"WWW-Authenticate"}
    )
    user_name =  verify_token(token,credentials_exception)

    # Fetch user from MongoDB
    user = users_collection.find_one({"user_name": user_name})

    if user is None:
        raise credentials_exception

    return user