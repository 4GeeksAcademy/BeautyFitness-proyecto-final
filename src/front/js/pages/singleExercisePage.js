import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

export const SingleExercisePage = () => {
    const { store } = useContext(Context);
    const { exerciseId } = useParams();
    const [exercise, setExercise] = useState(null);

    useEffect(() => {
        const selectedExercise = store.exercises.find(ex => ex.id === exerciseId);
        setExercise(selectedExercise);
    }, [exerciseId, store.exercises]);

    if (!exercise) return <div>Loading...</div>;

    return (
        <div className="container">
            <h1>{exercise.name}</h1>
            <img src={exercise.gifUrl} alt={exercise.name} />
            <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
            <p><strong>Equipment:</strong> {exercise.equipment}</p>
            <p><strong>Target:</strong> {exercise.target}</p>
            <div>
                <h3>Secondary Muscles:</h3>
                <ul>
                    {exercise.secondaryMuscles.map((muscle, index) => (
                        <li key={index}>{muscle}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Instructions:</h3>
                <ul>
                    {exercise.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
