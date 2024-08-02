import React from "react";
import "../../styles/profileObjetive.css";
const DayRoutine = () => {
  return (
    <div>
     
      <main className="profileObjetive-container">
        <h1 className="mt-5">Day routine</h1>
        <h3>Type Routine</h3>

        <div className="button-container">
        <button type="button" class="btn btn-secondary">Monday</button>
        <video src="..." class="object-fit-contain" autoplay></video>
        <video src="..." class="object-fit-contain" autoplay></video>

        <button type="button" class="btn btn-secondary">Tuesday</button>
        <video src="..." class="object-fit-contain" autoplay></video>
        <video src="..." class="object-fit-contain" autoplay></video>

        <button type="button" class="btn btn-secondary">Wensday</button>
        <video src="..." class="object-fit-contain" autoplay></video>
        <video src="..." class="object-fit-contain" autoplay></video>

        <button type="button" class="btn btn-secondary">Thursday</button>
        <video src="..." class="object-fit-contain" autoplay></video>
        <video src="..." class="object-fit-contain" autoplay></video>

        <button type="button" class="btn btn-secondary">Friday</button>
        <video src="..." class="object-fit-contain" autoplay></video>
        <video src="..." class="object-fit-contain" autoplay></video>

        <button type="button" class="btn btn-secondary">Thursday</button>
        <video src="..." class="object-fit-contain" autoplay></video>
        <video src="..." class="object-fit-contain" autoplay></video>

        
        <button type="button" class="btn btn-success mt-20 p-10">Continue</button>
        </div>
      </main>
    
    </div>
  );
};

export default DayRoutine;
