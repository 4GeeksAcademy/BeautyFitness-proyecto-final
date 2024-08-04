

import React from "react";
import "../../styles/profileObjetive.css";

const CardDay = ({ videoSrc, exerciseName, interval }) => {
  return (
    <div className="card-day bg-light mb-3">
      <div className="video-container">
        <video 
          src={videoSrc} 
          className="card-video object-fit-contain" 
          controls 
        />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{exerciseName}</h5>
        <p className="card-text">{interval}</p>
      </div>
    </div>
  );
};

export default CardDay;
