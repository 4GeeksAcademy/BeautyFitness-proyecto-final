import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

export const CardWorkout = () => {
  const { store, actions } = useContext(Context);
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        await actions.getWorkouts();
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchWorkouts();
  }, [actions]);

  const toggleSelectWorkout = (workout) => {
    setSelectedWorkouts(prevSelected => {
      if (prevSelected.includes(workout)) {
        return prevSelected.filter(w => w !== workout);
      } else {
        return [...prevSelected, workout];
      }
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h5>Select Workouts</h5>
      <ul>
        {store.workouts && store.workouts.map(workout => (
          <li key={workout.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedWorkouts.includes(workout)}
                onChange={() => toggleSelectWorkout(workout)}
              />
              {workout.name}
            </label>
          </li>
        ))}
      </ul>
      <h5>Selected Workouts</h5>
      <ul>
        {selectedWorkouts.map(workout => (
          <li key={workout.id}>
            {workout.name} - {workout.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

    // <div className="col-xl-3">
    //   <div className="card" style={{ width: 18 + 'rem' }}>
    //     <img src="..." className="rounded mx-auto d-block" alt="..." />
    //     <div className="card-body">
    //       <h5 className="card-title">ABS Workout</h5>
    //       <p className="card-text">Body text for whatever you'd like.</p>
    //       <a href="#" className="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>
    // </div>
  

export default CardWorkout;