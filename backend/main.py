
from backend.api.pollution.pollution_routes import router as pollution_router
from backend.api.dashboard.dashboard_routes import router as dashboard_router
from backend.api.auth.auth_routes import router as auth_router

from fastapi import FastAPI

app = FastAPI()

app.include_router(auth_router, prefix="/auth")
app.include_router(pollution_router, prefix="/pollution")
app.include_router(dashboard_router, prefix="/dashboard")

@app.get("/")
async def root():
    return {"message": "Welcome to the Marine Pollution and Restoration API"}
