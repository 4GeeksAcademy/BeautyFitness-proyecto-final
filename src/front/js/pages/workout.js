import React from "react";
import { CardWorkout } from "../component/cardWorkout";

export const Workout = () => {
  return (
    <div>
     
        <h1>ABS Workout </h1>
        <h3>26 WorkoutS</h3>
        <h5>25 mins</h5>
       
        <div className="row align-center">
        <CardWorkout  />
        <CardWorkout  />
        <CardWorkout  /> 
        <CardWorkout  />
      </div>
     
    </div>
  );
};

export default Workout;