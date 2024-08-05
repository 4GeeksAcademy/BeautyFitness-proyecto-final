

import React from "react";
import "../../styles/profile.css";
import { Link } from "react-router-dom";
import CardImage from "../component/cardImage";

const Day = () => {
  const days = [
    { ImageSrc: "https://picsum.photos/536/354", exerciseName: "Exercise 1 mt-5 text-dark", interval: "text-dark 3 sets of 10 reps" },
    { ImageSrc: "https://picsum.photos/536/354", exerciseName: "Exercise 2", interval: "4 sets of 12 reps" },
    { ImageSrc: "https://picsum.photos/536/354", exerciseName: "Exercise 3", interval: "5 sets of 15 reps" },

    // Agrega más ejercicios según sea necesario
  ];

  return (
    <main className="profile-container border-dark bg-dark">
      <div className="col-xl border-dark ">
        <div className="card mb-1 mx-auto border-dark " style={{ width: "36rem" }}>
          <div className="text-center bg-dark">
            
            <div className="form-group  ">
      <label htmlFor="daySelect  ">Day</label>
      <select id="daySelect" className="form-control  ">
                <option value="">Select day</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row justify-content-center">
            {days.map((day, index) => (
              <div key={index} className="col-12 col-md-4 mb-3">
                <CardImage /> 
                <CardImage /> 
                <CardImage /> 
               
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <Link to="/day">
            <button type="button" className="btn btn-secondary mx-2 bg-dark">
              Back
            </button>
          </Link>
          <Link to="/videoWorkout">
            <button type="button" className="btn btn-success mx-2">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Day;
