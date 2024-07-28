import React from "react";
import Footer from "../component/footer";
import { NavBar } from "../component/navBar";
 export const WorkoutList = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Workout List Page</h1>
        <p>List of all workouts</p>
      </main>
      <Footer />
    </div>
  );
};

export default WorkoutList;
