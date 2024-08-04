
import React from "react";
import "../../styles/profileObjetive.css";

const DayRoutine = () => {
  return (
    <div>
      <main className="profileObjetive-container container">
        <h1 className="mt-5 text-center">Day Routine</h1>
        <h3 className="text-center">Type Routine</h3>

        <div className="button-container my-3">
          <div className="row text-center">
            {/* Botón para cada día */}
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 mb-3">
                <button type="button" className="btn btn-secondary w-100 btn-day">{day}</button>
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div className="my-3 text-center">
          <video src="..." className="object-fit-contain" autoPlay></video>
          <video src="..." className="object-fit-contain" autoPlay></video>
        </div>

        {/* Botón de Continuar */}
        <div className="text-center mt-4">
          <button type="button" className="btn btn-success mt-1">Continue</button>
        </div>
      </main>
    </div>
  );
};

export default DayRoutine;

