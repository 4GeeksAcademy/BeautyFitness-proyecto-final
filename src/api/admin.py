  
import os
from flask_admin import Admin
from .models import db, User, ExperienceLevel, TrainingDays, Goal
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(ExperienceLevel, db.session))
    admin.add_view(ModelView(TrainingDays, db.session))
    admin.add_view(ModelView(Goal, db.session))
    # admin.add_view(ModelView(CalorieLog, db.session))
    # admin.add_view(ModelView(UserProgress, db.session))
    # admin.add_view(ModelView(Workout, db.session))
    # admin.add_view(ModelView(RoutineActivity, db.session))
    # admin.add_view(ModelView(Exercise, db.session))
    
    

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))