import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../store/appContext';


export const TrainingDaysComp = () => {
    const { store, actions } = useContext(Context);
    

    useEffect(() => {
        actions.getTrainingDays();
    }, []);

    const handleAddTrainingDays = () => {
        actions.addTrainingDays(5, ['Monday', 'Wednesday', 'Friday']);
    };

    return (
        <div>
            <h1>Training Days</h1>
            <button onClick={handleAddTrainingDays}>Add Training Days</button>
            <ul>
                {store.trainingDays?.map((day, index) => (
                    <li key={index}>{day}</li>
                ))}
            </ul>
        </div>
    );
};


