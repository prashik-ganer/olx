
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from utility.jwttoken import verify_token
from utility.database import users_collection




oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
def get_current_user(token: str = Depends(oauth2_scheme)):
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