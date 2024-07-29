"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token,get_jwt_identity,jwt_required
from datetime import datetime

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

