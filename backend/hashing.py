import bcrypt
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)

def get_user(users_collection, username: str):
    user = users_collection.find_one({"user_name":username})
    return user

def authenticate_user(users_collection, username: str, password: str):
    user = get_user(users_collection, username)
    if not user:
        return False
    if not verify_password(password, user["password"]):
        return False
    return user
# class Hash():
#     def hash_password(password: str) -> str:
#         """
#         Hash a password using bcrypt and return the hashed password as a string.
    
#         :param password: The password to hash.
#         :return: The hashed password.
#         """
#         if not password:
#             raise ValueError("Password cannot be empty")
#         hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
#         return hashed.decode('utf-8')

#     def verify_password(stored_password: str, provided_password: str) -> bool:
#         """
#         Verify a stored hashed password against a provided password.
#         """
#         return bcrypt.checkpw(provided_password.encode('utf-8'), stored_password.encode('utf-8'))


