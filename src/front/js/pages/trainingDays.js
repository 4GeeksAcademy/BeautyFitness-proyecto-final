import React from "react";
import "../../styles/trainingDays.css";
const TrainingDays = () => {
  return (
     <div>
        
        <main className="trainingDays-container" >
          <h1 className="mt-5">Training days</h1>
            <h3>How many days of training?</h3>
            <div className="button-container">
        <button type="button" class="btn btn-secondary">1</button>
        <button type="button" class="btn btn-secondary">2</button>
        <button type="button" class="btn btn-secondary">3</button>
        <button type="button" class="btn btn-secondary">4</button>
        <button type="button" class="btn btn-secondary">5</button>
        <button type="button" class="btn btn-secondary">6</button>
        <button type="button" class="btn btn-secondary">7</button>
        </div>
            <h3>Choose training day</h3>
            <div className="button-container">
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
  );
};

export default TrainingDays;