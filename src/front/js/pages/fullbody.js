import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardFullBody from "../component/cardFullBody";

export const Fullbody = () => {
  // Estado para el término de búsqueda y selección del día
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

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
      <div className="container center">
        <h3 className="mt-4 text-center">Selecciona tu Rutina de Ejercicios</h3>

        {/* Selección del día */}
        <div className="form-group my-3">
          <label htmlFor="daySelect">Día</label>
          <select
            id="daySelect"
            className="form-control"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            <option value="">Selecciona un día</option>
            <option value="monday">Lunes</option>
            <option value="tuesday">Martes</option>
            <option value="wednesday">Miércoles</option>
            <option value="thursday">Jueves</option>
            <option value="friday">Viernes</option>
            <option value="saturday">Sábado</option>
            <option value="sunday">Domingo</option>
          </select>
        </div>

        {/* Campo de búsqueda */}
        <div className="form-group my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar rutinas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Lista de tarjetas filtradas */}
        <div className="row justify-content-center">
          {filteredWorkouts.map((workout, index) => (
            <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
              <CardFullBody
                title={workout.title}
                description={workout.description}
              />
            </div>
          ))}
        </div>

        {/* Contenedor para los botones */}
        <div className="d-flex justify-content-center mb-5">
          <Link to="/previousPage">
            <button type="button" className="btn btn-secondary mb-5 mx-2 bg-dark">
             Back
            </button>
          </Link>
          <Link to="/nextPage">
            <button type="button" className="btn btn-success mb-5 mx-2">
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Fullbody;
