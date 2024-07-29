import React from "react";
import { CardWorkout } from "../component/cardWorkout";

export const Workout = () => {
  return (
    <div>
     
        <h1>Workout Page</h1>
        <p>Details about a specific workout</p>
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