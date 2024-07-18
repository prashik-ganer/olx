from fastapi import FastAPI,HTTPException, status
from backend.schema import UserDetails, UserLogIn

app = FastAPI()
@app.get("/")
def main():
    return {'message':'Website is ready'}


users=  []
@app.post("/sign-up")
def sign_up(user: UserDetails):
    username = user.name
    password = user.password
    email = user.email
    user_object = {
        "username": username,
        "password": password,
        "email": email
    }
    users.append(user_object)
    return  {'message':'User created successfully'}

@app.post("/log-in")
def log_in(request: UserLogIn):
    email = request.email
    password = request.password
    for user in users:
        if user['email'] == email and user['password'] == password:
            return {'message':'User logged in successfully'}
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials"
    )

