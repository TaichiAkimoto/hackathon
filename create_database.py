from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

Base = declarative_base()

class Event(Base):
    __tablename__ = 'event'

    id = Column(Integer, primary_key=True)
    name = Column(String(80), nullable=False)
    location = Column(String(250), nullable=False)
    date = Column(String(250), nullable=False)
    remain = Column(Integer, nullable=False)

    @property
    def serialize(self):
        return {
            'name': self.name,
            'id': self.id,
            'location': self.location,
            'date': self.date,
            'remain': self.remain
        }

engine = create_engine('sqlite:///basketball.db')

Base.metadata.create_all(engine)
