"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token,get_jwt_identity,jwt_required

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
    new_user = user.create_user(email=body["email"],password=body["password"])
    print(new_user)
    return jsonify({"msg":"User created"})

@api.route('/login', methods=['POST'])
def login():
    body = request.json
    user = User.query.filter_by(email=body["email"]).first()
    if user and user.check_password(password=body["password"]):
        access_token = create_access_token(identity=user.serialize())
        return jsonify({"token":access_token})
    else:
        return jsonify({"msg":"Wrong user or password"}),401