import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy import create_engine
from eralchemy2 import render_er

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    username = Column(String(250), nullable=False)
    name = Column(String(250), nullable=False)
    lastname = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False)
    password = Column(String(255), nullable=False)  
    birth_date = Column(Date, nullable=False)
    gender = Column(Enum(male,female,none), nullable=False)
    weight = Column(Float, nullable=False)
    height = Column(Float, nullable=False)
    goal_id = Column(Integer, ForeignKey('goal.id'))
    experience_level_id = Column(Integer, ForeignKey('experience_level.id'))
    training_days_id = Column(String(50), ForeignKey('training_days.id'))
    registration_date = Column(TIMESTAMP, nullable=False)
    
    goal_id= relationship('Goal')
    experience_level = relationship('Experience_Level')
    training_days = relationship('Training_Days')
    workouts = relationship('Workout', back_populates='user')
    routine_activities = relationship('Routine_Activity', back_populates='user')
    user_calorie_logs = relationship('User_Calorie_Log', back_populates='user')
    user_progresses = relationship('User_Progress', back_populates='user')


class Post(Base):
    __tablename__ = 'post'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship(User)

class Comment(Base):
    __tablename__ = 'comment'
    id = Column(Integer, primary_key=True)
    author_id = Column(Integer, ForeignKey('user.id'))
    author = relationship(User)
    post_id = Column(Integer, ForeignKey('post.id'))
    post = relationship(Post)

class Media(Base):
    __tablename__ = 'media'
    id = Column(Integer, primary_key=True)
    type = Column(String(250), nullable=False)
    url = Column(String(250), nullable=False)
    post_id = Column(Integer, ForeignKey('post.id'))
    post = relationship(Post)

class Follower(Base):
    __tablename__ = 'follower'
    id = Column(Integer, primary_key=True)
    user_from_id = Column(Integer, ForeignKey('user.id'))
    user_from = relationship(User)
    user_to_id = Column(Integer, ForeignKey('user.id'))
    user_to = relationship(User)

    

    def to_dict(self):
        return {}

## Draw from SQLAlchemy base
try:
    result = render_er(Base, 'diagram.png')
    print("Success! Check the diagram.png file")
except Exception as e:
    print("There was a problem genering the diagram")
    raise e