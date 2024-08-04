import React from "react";
import "../../styles/profileObjetive.css";
const DayRoutine = () => {
  return (
    <div>
     
      <main className="profileObjetive-container">
        <h1 className="mt-1">Day </h1>
        <h3>Name  Routine</h3>
        <h3>Intervals</h3>
        <div className="button-container">
        <button type="button" className="btn btn-secondary mb-1">Monday</button>
        <video src="..." className="object-fit-contain" autoplay></video>
        <video src="..." className="object-fit-contain" autoplay></video>
        <video src="..." className="object-fit-contain" autoplay></video>
        <video src="..." className="object-fit-contain" autoplay></video>
     
        <button type="button" className="btn btn-success mt-1">Continue</button>
        </div>
      </main>
    
    </div>
  );
};

export default DayRoutine;
