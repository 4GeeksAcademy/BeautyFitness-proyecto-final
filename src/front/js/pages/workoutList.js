import React from "react";
import CardWorkout from "../component/cardWorkout";

export const WorkoutList = () => {
  return (


    <main className="workoutList-container">
      <div className="center">
        <h1>Workout List Page</h1>
        <p>List of all workouts</p>

        <CardWorkout />
      </div>
    </main>


  );
};

export default WorkoutList;
