from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_pollution_data():
    return {"message": "Pollution data retrieved"}

@router.post("/")
async def report_pollution():
    return {"message": "Pollution report submitted"}
