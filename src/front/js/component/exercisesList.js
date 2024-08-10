import React from 'react';
import { ExerciseCard } from './exerciseCard';

export const ExercisesList = ({ exercises }) => {
    return (
        <div className="exercises-list d-flex justify-content-center align-items-center">
            <ul className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-flex justify-content-center align-items-center p-0'>
                {exercises.map((exercise, index) => (
                    <li key={index} className='col'>
                        <ExerciseCard exercise={exercise} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
