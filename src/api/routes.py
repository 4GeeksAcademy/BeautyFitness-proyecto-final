"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, ExperienceLevel, TrainingDays, Goal, CalorieLog, UserProgress, Workout
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token,get_jwt_identity,jwt_required
from datetime import datetime, date

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register():
    body = request.json
    user = User()
    new_user = user.create_user(email=body["email"], password=body["password"], name=body["name"], surname=body["surname"], username=body["username"])
    print(new_user)
    return jsonify({"msg": "User created"})

@api.route('/login', methods=['POST'])
def login():
    body = request.json
    email = body.get('email')
    password = body.get('password')
    
    user = User.query.filter_by(email=email).first()
    
    if user and user.check_password(password):
        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token, "user": user.serialize()}), 200
    else:
        return jsonify({"msg": "Wrong user or password"}), 401
        
@api.route('/user/<int:user_id>', methods=['PUT'])
@jwt_required()
def update_user(user_id):
    body = request.json
    user = User.query.get(user_id)

    if not user:
        return jsonify({"msg": "User not found"}), 404

    # Update the user's data with the new values
    if 'birth_date' in body:
        user.birth_date = datetime.strptime(body['birth_date'], '%Y-%m-%d').date()
    if 'gender' in body:
        user.gender = body['gender']
    if 'weight' in body:
        user.weight = body['weight']
    if 'height' in body:
        user.height = body['height']

    db.session.commit()
    return jsonify({"msg": "User updated"}), 200





@api.route('/experience_levels', methods=['POST'])
@jwt_required()
def create_experience_level():
    user_id = get_jwt_identity()
    data = request.get_json()
    new_experience_level = ExperienceLevel(
        level_name=data['level_name'],
        user_id='user_id'
    )
    db.session.add(new_experience_level)
    db.session.commit()
    return jsonify({"message": "Experience level created successfully"}), 201

@api.route('/experience_levels', methods=['GET'])
@jwt_required()
def get_experience_levels():
    user_id = get_jwt_identity()
    experience_levels = ExperienceLevel.query.all()
    result = [
        {
            "id": exp.id,
            "level_name": exp.level_name,
            "user_id": exp.user_id
        } for exp in experience_levels
    ]
    print(ExperienceLevel, "prueba")
    return jsonify(result), 200

@api.route('/experience_levels/<int:id>', methods=['GET'])
@jwt_required()
def get_experience_level(id):
    user_id = get_jwt_identity()
    experience_level = ExperienceLevel.query.get_or_404(id)
    result = {
        "id": experience_level.id,
        "level_name": experience_level.level_name,
        "user_id": experience_level.user_id
    }
    return jsonify(result), 200

@api.route('/experience_levels/<int:id>', methods=['PUT'])
@jwt_required()
def update_experience_level(id):
    user_id = get_jwt_identity()
    data = request.get_json()
    experience_level = ExperienceLevel.query.get_or_404(id)
    experience_level.level_name = data['level_name']
    experience_level.user_id = data['user_id']
    db.session.commit()
    return jsonify({"message": "Experience level updated successfully"}), 200

@api.route('/experience_levels/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_experience_level(id):
    user_id = get_jwt_identity()
    experience_level = ExperienceLevel.query.get_or_404(id)
    db.session.delete(experience_level)
    db.session.commit()
    return jsonify({"message": "Experience level deleted successfully"}), 200


@api.route('/training-days', methods=['POST'])
@jwt_required()
def add_training_days():
    user_id = get_jwt_identity()
    data = request.get_json()

    number_of_days = data.get('number_of_days')
    days = data.get('days')
    dates = data.get('dates')

    if not number_of_days or not days:
        return jsonify({'message': 'Number of days and days are required'}), 400

    training_days = TrainingDays(
        number_of_days=number_of_days,
        days=days,
        user_id=user_id,
        
    )

    db.session.add(training_days)
    db.session.commit()

    return jsonify({'message': 'Training days added successfully'}), 201

@api.route('/training-days', methods=['GET'])
@jwt_required()
def get_training_days():
    user_id = get_jwt_identity()
    training_days = TrainingDays.query.filter_by(user_id=user_id).all()
    
    if not training_days:
        return jsonify({'message': 'No training days found'}), 404
    
    result = []
    for day in training_days:
        result.append({
            'id': day.id,
            'number_of_days': day.number_of_days,
            'days': day.days
        })
    
    return jsonify(result), 200


@api.route('/workouts', methods=['GET'])
def get_workouts():
    workouts = Workout.query.all()
    output = []
    for workout in workouts:
        workout_data = {
            'id': workout.id,
            'user_id': workout.user_id,
            'routine_name': workout.routine_name,
            'routine_type': workout.routine_type,
            'creation_date': workout.creation_date.isoformat()
        }
        output.append(workout_data)
    return jsonify({'workouts': output})

@api.route('/workouts/<id>', methods=['GET'])
def get_workout(id):
    workout = Workout.query.get_or_404(id)
    workout_data = {
        'id': workout.id,
        'user_id': workout.user_id,
        'routine_name': workout.routine_name,
        'routine_type': workout.routine_type,
        'creation_date': workout.creation_date.isoformat()
    }
    return jsonify(workout_data)

@api.route('/workouts/<id>', methods=['PUT'])
def update_workout(id):
    data = request.get_json()
    workout = Workout.query.get_or_404(id)
    workout.user_id = data['user_id']
    workout.routine_name = data['routine_name']
    workout.routine_type = data['routine_type']
    workout.creation_date = data['creation_date']
    db.session.commit()
    return jsonify({'message': 'Workout updated successfully'})

@api.route('/workouts/<id>', methods=['DELETE'])
def delete_workout(id):
    workout = Workout.query.get_or_404(id)
    db.session.delete(workout)
    db.session.commit()
    return jsonify({'message': 'Workout deleted successfully'})

@api.route('/goals', methods=['POST'])
@jwt_required()
def add_goals():
    user_id = get_jwt_identity()
    data = request.get_json()

    goals = data.get('goals')

    if not goals or len(goals) < 3:
        return jsonify({'message': 'You must provide at least 3 goals'}), 400

    goal_objects = []
    for goal_name in goals:
        goal = Goal(goal_name=goal_name, user_id=user_id)
        goal_objects.append(goal)
    
    db.session.add_all(goal_objects)
    db.session.commit()

    return jsonify({'message': 'Goals added successfully'}), 201

@api.route('/goals', methods=['GET'])
@jwt_required()
def get_goals():
    user_id = get_jwt_identity()
    goals = Goal.query.filter_by(user_id=user_id).all()
    
    if not goals:
        return jsonify({'message': 'No goals found'}), 404
    
    result = []
    for goal in goals:
        result.append({
            'id': goal.id,
            'goal_name': goal.goal_name
        })
    
    return jsonify(result), 200

@api.route('/calorie-logs', methods=['POST'])
@jwt_required()
def add_calorie_log():
    user_id = get_jwt_identity()
    data = request.get_json()

    date_str = data.get('date')
    date_obj = date.fromisoformat(date_str)
    routine_calories_burned = data.get('routine_calories_burned')
    calories_consumed = data.get('calories_consumed')
    calories_balance = data.get('calories_balance')

    if not date_str or routine_calories_burned is None or calories_consumed is None or calories_balance is None:
        return jsonify({'message': 'All fields are required'}), 400

    new_log = CalorieLog(
        user_id=user_id,
        date=date_obj,
        routine_calories_burned=routine_calories_burned,
        calories_consumed=calories_consumed,
        calories_balance=calories_balance
    )

    db.session.add(new_log)
    db.session.commit()

    return jsonify({'message': 'Calorie log added successfully'}), 201

@api.route('/calorie-logs', methods=['GET'])
@jwt_required()
def get_calorie_logs():
    user_id = get_jwt_identity()
    calorie_logs = CalorieLog.query.filter_by(user_id=user_id).all()

    if not calorie_logs:
        return jsonify({'message': 'No calorie logs found'}), 404

    result = []
    for log in calorie_logs:
        result.append({
            'id': log.id,
            'date': log.date.isoformat(),
            'routine_calories_burned': log.routine_calories_burned,
            'calories_consumed': log.calories_consumed,
            'calories_balance': log.calories_balance
        })

    return jsonify(result), 200

@api.route('/calorie-logs/<int:log_id>', methods=['PUT'])
@jwt_required()
def update_calorie_log(log_id):
    user_id = get_jwt_identity()
    log = CalorieLog.query.get_or_404(log_id)

    if log.user_id != user_id:
        return jsonify({'message': 'Permission denied'}), 403

    data = request.get_json()
    log.date = date.fromisoformat(data.get('date', log.date.isoformat()))
    log.routine_calories_burned = data.get('routine_calories_burned', log.routine_calories_burned)
    log.calories_consumed = data.get('calories_consumed', log.calories_consumed)
    log.calories_balance = data.get('calories_balance', log.calories_balance)

    db.session.commit()

    return jsonify({'message': 'Calorie log updated successfully'}), 200

@api.route('/user-progress', methods=['GET'])
@jwt_required()
def get_user_progress():
    user_id = get_jwt_identity()
    progress_records = UserProgress.query.filter_by(user_id=user_id).all()

    if not progress_records:
        return jsonify({'message': 'No user progress found'}), 404

    result = []
    for record in progress_records:
        result.append({
            'id': record.id,
            'date': record.date.isoformat(),
            'weight': record.weight,
            'goal_id': record.goal_id,
            'experience_level_id': record.experience_level_id,
            'training_days_id': record.training_days_id
        })

    return jsonify(result), 200

@api.route('/user-progress/<int:progress_id>', methods=['PUT'])
@jwt_required()
def update_user_progress(progress_id):
    user_id = get_jwt_identity()
    progress_record = UserProgress.query.get_or_404(progress_id)

    if progress_record.user_id != user_id:
        return jsonify({'message': 'Permission denied'}), 403

    data = request.get_json()
    progress_record.date = date.fromisoformat(data.get('date', progress_record.date.isoformat()))
    progress_record.weight = data.get('weight', progress_record.weight)
    progress_record.goal_id = data.get('goal_id', progress_record.goal_id)
    progress_record.experience_level_id = data.get('experience_level_id', progress_record.experience_level_id)
    progress_record.training_days_id = data.get('training_days_id', progress_record.training_days_id)

    db.session.commit()

    return jsonify({'message': 'User progress updated successfully'}), 200

@api.route('/user-progress/<int:progress_id>', methods=['DELETE'])
@jwt_required()
def delete_user_progress(progress_id):
    user_id = get_jwt_identity()
    progress_record = UserProgress.query.get_or_404(progress_id)

    if progress_record.user_id != user_id:
        return jsonify({'message': 'Permission denied'}), 403

    db.session.delete(progress_record)
    db.session.commit()

    return jsonify({'message': 'User progress deleted successfully'}), 200









