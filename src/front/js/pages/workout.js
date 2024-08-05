import React from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import CardWorkout from "../component/cardWorkout";

export const Workout = () => {
  return (
    <main className="workoutList-container bg-dark">
      <div className="center">
        <h3 className="mt-2 text-center">Abs Workout</h3>
        <h4 className="mt-2 text-center">26 Workouts</h4>
        <h5 className="mt-2 text-center">26 Minutes</h5>
        <div className="container my-3">
          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
              <CardWorkout />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
              <CardWorkout />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
              <CardWorkout />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
              <CardWorkout />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
              <CardWorkout />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
              <CardWorkout />
            </div>
            {/* Puedes añadir más tarjetas aquí */}
          </div>
        </div>
        
        {/* Contenedor para los botones */}
        <div className="d-flex justify-content-center mb-5">
          <Link to="/workoutList">
            <button type="button" className="btn btn-secondary mb-5 mx-2">
              Back
            </button>
          </Link>
          <Link to="/day">
            <button type="button" className="btn btn-success mb-5 mx-2">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Workout;
