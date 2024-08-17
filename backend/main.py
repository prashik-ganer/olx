from fastapi import FastAPI,HTTPException, status
from schema import UserDetails, UserLogIn
from functions import hash_password, verify_password

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
    
    # Find the user by email
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
