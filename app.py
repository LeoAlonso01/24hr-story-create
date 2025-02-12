from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from models import Story
from schema import StoryCreate, StoryResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# inicialira el cors
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Crear la base de datos
Base.metadata.create_all(bind=engine)

# Dependencia para obtener la sesión de BD
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def index():
    return {"message": "login"}

@app.get("/storys", response_model=list[StoryResponse])
def get_storys(db: Session = Depends(get_db)):
    return db.query(Story).all()

@app.post("/storys", response_model=StoryResponse)
def create_story(story: StoryCreate, db: Session = Depends(get_db)):
    new_story = Story(title=story.title, body=story.body)
    db.add(new_story)
    db.commit()
    db.refresh(new_story)
    return new_story

@app.get("/storys/{story_id}", response_model=StoryResponse)
def get_story(story_id: int, db: Session = Depends(get_db)):
    story = db.query(Story).filter(Story.id == story_id).first()
    if not story:
        raise HTTPException(status_code=404, detail="Story not found")
    return story




