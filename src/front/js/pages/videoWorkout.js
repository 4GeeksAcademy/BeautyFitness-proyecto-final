

import React from "react";
import "../../styles/profile.css";
import { Link } from "react-router-dom";

const VideoWorkday = () => {
  // Detalles del video único a mostrar
  const videoDetails = {
    videoSrc: "https://youtu.be/vz9xaVFWy7M", // Cambia esto al enlace del video que deseas mostrar
    exerciseName: "Dominadas",
    interval: "3 sets de 10 reps"
  };

  return (
    <main className="profile-container">
      <div className="col-xl">
        <div className="card mb-1 mx-auto" style={{ width: "36rem" }}>
          <div className="text-center bg-dark">
            <video
              src={videoDetails.videoSrc}
              className="object-fit-contain"
              controls
              style={{ width: "100%", borderRadius: "5px" }}
            ></video>
          </div>
          <div className="card-body text-center text-dark">
            <h5 className="card-title">{videoDetails.exerciseName}</h5>
            <p className="card-text">{videoDetails.interval}</p>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <Link to="/day">
            <button type="button" className="btn btn-secondary mx-2">
              Back
            </button>
          </Link>
          <Link to="/trainingDays">
            <button type="button" className="btn btn-success mx-2">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default VideoWorkday;
