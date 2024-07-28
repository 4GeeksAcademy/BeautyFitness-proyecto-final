import React from "react";
import { NavBar } from "../component/navBar";
import Footer from "../component/footer";
import { CardWorkout } from "../component/cardWorkout";

export const Workout = () => {
  return (
    <div>
      <NavBar />
        <h1>Workout Page</h1>
        <p>Details about a specific workout</p>
        <div className="row align-center">
        <CardWorkout  />
        <CardWorkout  />
        <CardWorkout  /> 
        <CardWorkout  />
      </div>
      <Footer />
    </div>
  );
};

export default Workout;