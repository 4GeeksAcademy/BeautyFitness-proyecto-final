import React from "react";
import "../../styles/trainingDays.css";
import { TrainingDaysComp } from "../component/TrainingDaysComp";

const TrainingDays = () => {
  return (
    <div>
        <div >
          <TrainingDaysComp />
        </div>
          
      <div className="mt-5">

        <main className="trainingDays-container mt-5" >
            
              <h2 className="mt-5">Choose training day</h2>
              <div className="button-container d-flex">
          <button type="button" class="btn btn-secondary">Monday</button>
          <button type="button" class="btn btn-secondary">Tuesday</button>
          <button type="button" class="btn btn-secondary">Wensday</button>
          <button type="button" class="btn btn-secondary">Thursday</button>
          <button type="button" class="btn btn-secondary">Friday</button>
          <button type="button" class="btn btn-secondary">Saturday</button>
          <button type="button" class="btn btn-secondary">Sunday</button>
          </div> 
            <h3>Type training</h3>
            <div className="button-container">
          <button type="button" class="btn btn-secondary">Fullbody</button>
          <button type="button" class="btn btn-secondary">Legs</button>
          <button type="button" class="btn btn-secondary">Push-Pull</button>
          <button type="button" class="btn btn-secondary">Weider</button>
          
          </div> 

                <button type="button" class="btn btn-success">Continue</button>
        
        </main>
      
      </div>
    </div>
  );
};

export default TrainingDays;