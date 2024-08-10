import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/exerciseCard.css';

export const ExerciseCard = ({ exercise }) => {
    const navigate = useNavigate();
    const primaryMuscle = exercise.bodyPart;
    const secondaryMuscles = exercise.secondaryMuscles;

    const handleCardClick = () => {
        navigate(`/exercise/${exercise.id}`);
    };

    return (
        <div className="exercise-card text-dark" onClick={handleCardClick}>
            <img src={exercise.gifUrl} alt={exercise.name} className="exercise-image" />
            <h3>{exercise.name}</h3>
            <div className="muscle-tags">
                <span className="primary-muscle">{primaryMuscle}</span>
                {secondaryMuscles.map((muscle, index) => (
                    <span key={index} className="secondary-muscle">{muscle}</span>
                ))}
            </div>
        </div>

    );
};
