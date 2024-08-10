import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../store/appContext';
import Swal from 'sweetalert2';

const DaySelector = ({ onSelect }) => {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    return (
        <div className='container'>
            {days.map((day) => (
                <div className='btn btn-outline-success'
                 key={day} onClick={() => onSelect(day)} style={{ display: 'inline-block', margin: '15px', cursor: 'pointer', border: '1px solid black', padding: '16px' }}>
                    {day}
                </div>
            ))}
        </div>
    );
};

const TrainingDaysList = ({ trainingDays }) => (
    <ul>
        {trainingDays.map((day, index) => (
            <li key={index}>{day}</li>
        ))}
    </ul>
);

export const TrainingDaysComp = () => {
    const { store, actions } = useContext(Context);
    const [days, setDays] = useState([1, 3, 5]);

    useEffect(() => {
        const fetchTrainingDays = async () => {
            await actions.getTrainingDays();
        };
        fetchTrainingDays();
    }, [actions]);

    const handleAddTrainingDays = async () => {
        try {
            await actions.addTrainingDays(days.length, days);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Training days added successfully!',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to add training days.',
            });
        }
    };

    const handleDaySelect = (day) => {
        setDays((prev) => [...new Set([...prev, day])]);
    };

    return (
        <div className='container'>
                <h1 className='title text-center mt-5'>Training Days</h1>
            <div className='calendar mt-5'>
                
                <DaySelector onSelect={handleDaySelect} />

                <div class="d-grid gap-2 col-4 mx-auto">
                <button className='btn btn-success' onClick={handleAddTrainingDays}>Add Training Days</button>
                </div>
  
                <TrainingDaysList trainingDays={store.trainingDays || []} />
            </div>
        </div>
    );
};



