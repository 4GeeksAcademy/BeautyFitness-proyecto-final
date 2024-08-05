import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cardImage.css";

const CardImage = ({ imgSrc, exerciseName, interval }) => {
  return (
    <div className="card mb-3 border-dark">
   
        <img
          src={imgSrc}
          alt={exerciseName}
          className="card-img-top"
          style={{ height: "auto", objectFit: "cover" }}
        />
    
      <div className="card-container bg-secondary">
        <div className="card-body ">
          <h5 className="card-title text-center text-color-light" style={{ color: "black" }}>{exerciseName}</h5>
          <p className="card-texttext-center text-color-light" style={{ color: "black" }}>{interval}</p>
        </div>
      </div>
    </div>
  );
};

export default CardImage;


