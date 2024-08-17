from fastapi import FastAPI

app = FastAPI()


# home page API
@app.get("/")
def main():
    return {'message':'Website is ready'}
