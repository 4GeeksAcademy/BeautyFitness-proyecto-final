"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, ExperienceLevel
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token,get_jwt_identity,jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200




@api.route('/experience_levels', methods=['POST'])
def create_experience_level():
    data = request.get_json()
    new_experience_level = ExperienceLevel(
        level_name=data['level_name'],
        user_id=data['user_id']
    )
    db.session.add(new_experience_level)
    db.session.commit()
    return jsonify({"message": "Experience level created successfully"}), 201

@api.route('/experience_levels', methods=['GET'])
@jwt_required()
def get_experience_levels():
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
def get_experience_level(id):
    experience_level = ExperienceLevel.query.get_or_404(id)
    result = {
        "id": experience_level.id,
        "level_name": experience_level.level_name,
        "user_id": experience_level.user_id
    }
    return jsonify(result), 200

@api.route('/experience_levels/<int:id>', methods=['PUT'])
def update_experience_level(id):
    data = request.get_json()
    experience_level = ExperienceLevel.query.get_or_404(id)
    experience_level.level_name = data['level_name']
    experience_level.user_id = data['user_id']
    db.session.commit()
    return jsonify({"message": "Experience level updated successfully"}), 200

@api.route('/experience_levels/<int:id>', methods=['DELETE'])
def delete_experience_level(id):
    experience_level = ExperienceLevel.query.get_or_404(id)
    db.session.delete(experience_level)
    db.session.commit()
    return jsonify({"message": "Experience level deleted successfully"}), 200


@api.route('/goals', methods=['POST','GET'])
def goalsworkout():
    
    response_body = {
        "message": " I'm a message "
    }

    return jsonify(response_body), 200







