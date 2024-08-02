from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from datetime import datetime

db = SQLAlchemy()
bcrypt = Bcrypt()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    surname = db.Column(db.String(80), nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    birth_date = db.Column(db.Date, nullable=True)
    gender = db.Column(db.Enum('male', 'female', 'none', name='gender_enum'), nullable=True)
    weight = db.Column(db.Float, nullable=True)
    height = db.Column(db.Float, nullable=True)
    registration_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    
    experience = db.relationship('ExperienceLevel', backref='user', lazy=True)
    training = db.relationship('TrainingDays', backref='user', lazy=True)
    goals = db.relationship('Goal', backref='user', lazy=True)
    calorie_logs = db.relationship('CalorieLog', backref='user', lazy=True)
    progress = db.relationship('UserProgress', backref='user', lazy=True)
    workouts = db.relationship('Workout', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def generate_password(self, password):
        return bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)

    @staticmethod
    def create_user(email, password, name, surname, username, is_active=True):
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(
            email=email,
            password=hashed_password,
            is_active=is_active,
            name=name,
            surname=surname,
            username=username
        )
        db.session.add(new_user)
        db.session.commit()
        return new_user

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "surname": self.surname,
            "username": self.username,
            "birth_date": self.birth_date,
            "gender": self.gender,
            "weight": self.weight,
            "height": self.height,
            "registration_date": self.registration_date,
            # do not serialize the password, its a security breach
        }

class ExperienceLevel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    level_name = db.Column(db.String(50),  nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

class TrainingDays(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    number_of_days = db.Column(db.Integer, nullable=False)
    days = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

class Goal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    goal_name = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    progress = db.relationship('UserProgress', backref='goal', lazy=True)

class CalorieLog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    routine_calories_burned = db.Column(db.Integer, db.ForeignKey('routine_activity.id'), nullable=False)
    calories_consumed = db.Column(db.Integer, nullable=False)
    calories_balance = db.Column(db.Integer, nullable=False)

class UserProgress(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    weight = db.Column(db.Float, nullable=False)
    goal_id = db.Column(db.Integer, db.ForeignKey('goal.id'), nullable=False)
    experience_level_id = db.Column(db.Integer, db.ForeignKey('experience_level.id'), nullable=False)
    training_days_id = db.Column(db.Integer, db.ForeignKey('training_days.id'), nullable=False)

class Workout(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    routine_name = db.Column(db.String(50), nullable=False)
    routine_type = db.Column(db.String(50), nullable=False)
    creation_date = db.Column(db.Date, nullable=False)
    routine_activities = db.relationship('RoutineActivity', backref='workout', lazy=True)

class RoutineActivity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    workout_id = db.Column(db.Integer, db.ForeignKey('workout.id'), nullable=False)
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercise.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    days_of_the_week = db.Column(db.String(50), nullable=False)
    sets = db.Column(db.Integer, nullable=False)
    reps = db.Column(db.Integer, nullable=False)
    weight_used = db.Column(db.Integer, nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    calories_burned = db.relationship('CalorieLog', backref='routine_activity', lazy=True)

class Exercise(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    exercise_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    muscle_group = db.Column(db.String(50), nullable=False)
    video_url = db.Column(db.String(255), nullable=False)
    routine_exercises = db.relationship('RoutineActivity', backref='exercise', lazy=True)
