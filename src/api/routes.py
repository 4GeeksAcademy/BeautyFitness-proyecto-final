"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users])

@api.route('/api/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get_or_404(id)
    return jsonify(user.serialize())



levels = ['beginner', 'intermediate', 'advanced']

@api.route('/experience', methods=['POST'])
def experience_level():
    data = request.json 
    level = data.get('level')

    if level not in levels:
        return jsonify({'error':'level not valid'}), 400
    else: 
        return jsonify({'msg': f'experience level "{level}" is correct'}), 200
    
    db.session.add(experience_level)
    db.session.commit()
    return jsonify(experiencelevel.serialize()), 201


