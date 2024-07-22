import bcrypt

def hash_password(password: str) -> str:
    """
    Hash a password using bcrypt and return the hashed password as a string.
    
    :param password: The password to hash.
    :return: The hashed password.
    """
    if not password:
        raise ValueError("Password cannot be empty")
    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    return hashed.decode('utf-8')

def verify_password(stored_password: str, provided_password: str) -> bool:
    """
    Verify a stored hashed password against a provided password.
    """
    return bcrypt.checkpw(provided_password.encode('utf-8'), stored_password.encode('utf-8'))


