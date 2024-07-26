from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    lastname = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    birth_date = db.Column(db.Integer, unique=False, nullable=False)
    gender = db.Column(db.String(80), unique=False, nullable=False)
    weight = db.Column(db.Integer)
    height = db.Column(db.Integer)
    registration_date = db.Column(db.Integer, unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    experiencie = db.relationship('Experience_Level', backref='user')
    training = db.relationship('Training_Days', backref='user')
    goals = db.relationship('Goals', backref='user')
    calorie = db.relationship('Calorie_Log', backref='user')
    progress = db.relationship('User_Progress', backref='user')
    workout = db.relationship('Workout', backref='user')

    def __repr__(self):
        return f'<User {self.id}>'
    
   

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
 
class Experience_Level(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    level_name = db.Column(db.String(50), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    progreExperience = db.relationship('User_Progress', backref='experience_level') 
    

class Training_Days(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    number_of_days = db.Column(db.Integer, unique=False, nullable=False)
    days = db.Column(db.String(50), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    progre_training = db.relationship('User_Progress', backref='training_days')

class Goals(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    goals_name = db.Column(db.String(50), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    progres_s = db.relationship('User_Progress', backref='goals')

class Calorie_Log(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    date = db.Column(db.Integer, unique=False, nullable=False)
    routine_calories_burned = db.Column(db.Integer, db.ForeignKey('routine_activity.calories_burned'))
    calories_consumed = db.Column(db.Integer, unique=False, nullable=False)
    calories_balance = db.Column(db.Integer, unique=False, nullable=False)

class User_Progress(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    date = db.Column(db.Integer, unique=False, nullable=False)
    weight = db.Column(db.Integer)
    goal_id = db.Column(db.Integer, db.ForeignKey('goals.id'))
    experience_level_id = db.Column(db.Integer, db.ForeignKey('experience_level.id'))
    training_days_id = db.Column(db.Integer, db.ForeignKey('training_days.id'))

class Workout(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    routine_name = db.Column(db.String(50), unique=False, nullable=False)
    routine_type = db.Column(db.String(50), unique=False, nullable=False)
    creation_date = db.Column(db.Integer, unique=False, nullable=False)
    routine_workout = db.relationship('Routine_Activity', backref='workout')
    
class Routine_Activity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    workout_id = db.Column(db.Integer, db.ForeignKey('workout.id'))
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercise.id'))
    dates = db.Column(db.Integer, unique=False, nullable=False)
    days_of_the_week = db.Column(db.String(50), unique=False, nullable=False)
    sets = db.Column(db.Integer, unique=False, nullable=False)
    reps = db.Column(db.Integer, unique=False, nullable=False)
    weight_used = db.Column(db.Integer, unique=False, nullable=False)
    duration = db.Column(db.Integer, unique=False, nullable=False)
    calories_burned = db.relationship('Calorie_Log', backref='routine_activity')

class Exercise(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    exercise_name = db.Column(db.String(50), unique=False, nullable=False)
    description = db.Column(db.String(50), unique=False, nullable=False)
    muscle_group = db.Column(db.String(50), unique=False, nullable=False)
    video_url = db.Column(db.String(50), unique=False, nullable=False)
    routine_exercise = db.relationship('Routine_Activity', backref='exercise')


    