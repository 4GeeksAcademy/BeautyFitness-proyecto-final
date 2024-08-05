import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import CardWorkout from "../component/cardWorkout";

export const WorkoutList = () => {
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Datos de ejemplo para las tarjetas (pueden venir de props, contexto, etc.)
  const workouts = [
    { title: "Workout 1", description: "Full Body Workout" },
    { title: "Workout 2", description: "Cardio Session" },
    { title: "Workout 3", description: "Strength Training" },
    // Agrega más datos de ejercicios aquí
  ];

  // Filtrar las tarjetas según el término de búsqueda
  const filteredWorkouts = workouts.filter((workout) =>
    workout.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="workoutList-container bg-dark">
      <div className="center">
        <h3 className="mt-2 text-center">Workout List Page</h3>
        <h5 className="mt-2 text-center">List of all workouts</h5>
        
        {/* Campo de búsqueda */}
        <div className="container my-3">
          <div className="row justify-content-center">
            <div className="col-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search workouts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Lista de tarjetas filtradas */}
        <div className="container my-3">
          <div className="row justify-content-center">
            {filteredWorkouts.map((workout, index) => (
              <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
                <h5 className="mt-2 text-center">Toned Legs</h5>
                <CardWorkout title={workout.title} description={workout.description} />
              </div>
            ))}
          </div>
        </div>

        {/* Contenedor para los botones */}
        <div className="d-flex justify-content-center mb-5">
          <Link to="/trainingDays">
            <button type="button" className="btn btn-secondary mx-2">
              Back
            </button>
          </Link>
          <Link to="/workout">
            <button type="button" className="btn btn-success mx-2">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WorkoutList;
