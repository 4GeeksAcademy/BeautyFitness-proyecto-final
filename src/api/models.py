from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy import create_engine
from eralchemy2 import render_er

db = SQLAlchemy()

class User(db.Model):
    __tablename__: 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    lastname = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    birth_date = db.Column(db.Integer, unique=False, nullable=False)
    gender = db.Column(db.String(80), enumerate=(male,female,none), unique=False, nullable=False)
    weight = db.Column(db.float)
    height = db.Column(db.float)
    registration_date = db.Column(db.Timestamp, unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    experiencie = relationship('Experiencie', backref='user')
    training = relationship('Training_days', backref='user')
    goals = relationship('Goals', backref='user')
    calorie = relationship('Calorie_Log', backref='user')
    progress = relationship('User_Progress', backref='user')
    workout = relationship('Workout', backref='user')


class Experiencie_Level(db.Model):
    __tablename__: 'experiencie_level'
    id = db.Column(db.Integer, primary_key=True)
    level_name = db.Column(db.String(50), unique=False, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey('User.id'))
    progre_experience = relationship('User_Progress', backref='experiencie_level')

class Training_Days(db.Model):
    __tablename__: 'training_days'
    id = db.Column(db.Integer, primary_key=True)
    number_of_days = db.Column(db.Integer, unique=False, nullable=False)
    days = db.Column(db.String(50), unique=False, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey('User.id'))
    progre_training = relationship('User_Progress', backref='training_days')

class Goals(db.Model):
    __tablename__: 'goals'
    id = db.Column(db.Integer, primary_key=True)
    goals_name = db.Column(db.String(50), unique=False, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey('User.id'))
    progres_s = relationship('User_Progress', backref='goals')

class Calorie_Log(db.Model):
    __tablename__: 'calorie_log'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('User.id'))
    date = db.Column(db.Timestamp, unique=False, nullable=False)
    routine_calories_burned = db.Column(db.Integer, ForeignKey('Routine_Activity.calories_burned'))
    calories_consumed = db.Column(db.Integer, unique=False, nullable=False)
    calories_balance = db.Column(db.Integer, unique=False, nullable=False)

class User_Progress(db.Model):
    __tablename__: 'user_progress'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('User.id'))
    date = db.Column(db.Timestamp, unique=False, nullable=False)
    weight = db.Column(db.float)
    goal_id = db.Column(db.Integer, ForeignKey('Goal.id'))
    experience_level_id = db.Column(db.Integer, ForeignKey('Experiencie_Level.id'))
    training_days_id = db.Column(db.Integer, ForeignKey('Training_Days.id'))

class Workout(db.Model):
    __tablename__: 'workout'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('User.id'))
    routine_name = db.Column(db.String(50), unique=False, nullable=False)
    routine_type = db.Column(db.String(50), unique=False, nullable=False)
    creation_date = db.Column(db.Timestamp, unique=False, nullable=False)
    routine_workout = relationship('Routine_Activity', backref='workout')
    
class Routine_Activity(db.Model):
    __tablename__: 'routine_activity'
    id = db.Column(db.Integer, primary_key=True)
    workout_id = db.Column(db.Integer, ForeignKey('Workout.id'))
    exercise_id = db.Column(db.Integer, ForeignKey('Exercise.id'))
    dates = db.Column(db.Timestamp, unique=False, nullable=False)
    days_of_the_week = db.Column(db.String(50), unique=False, nullable=False)
    sets = db.Column(db.Integer, unique=False, nullable=False)
    reps = db.Column(db.Integer, unique=False, nullable=False)
    weight_used = db.Column(db.Integer, unique=False, nullable=False)
    duration = db.Column(db.Integer, unique=False, nullable=False)
    calories_burned = relationship('Calorie_Log', backref='routine_activity')

class Exercise(db.Model):
    __tablename__: 'exercise'
    id = db.Column(db.Integer, primary_key=True)
    exercise_name = db.Column(db.String(50), unique=False, nullable=False)
    description = db.Column(db.String(50), unique=False, nullable=False)
    muscle_group = db.Column(db.String(50), unique=False, nullable=False)
    video_url = db.Column(db.String(50), unique=False, nullable=False)
    routine_exercise = relationship('Routine_Activity', backref='exercise')


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }