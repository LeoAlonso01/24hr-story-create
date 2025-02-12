from pydantic import BaseModel

class StoryCreate(BaseModel):
    title: str
    body: str

class StoryResponse(StoryCreate):
    id: int

    class Config:
        orm_mode = True

