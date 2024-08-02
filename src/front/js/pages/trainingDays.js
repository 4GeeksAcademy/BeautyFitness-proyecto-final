import React from "react";
import "../../styles/trainingDays.css";
const TrainingDays = () => {
  return (
     <div>
        
        <main className="trainingDays-container" >
          <h1 className="mt-5">Training days</h1>
            <h3>How many days of training?</h3>
            <div className="button-container">
                <div className="row"> 
                    <div className="col"><button type="button" class="btn btn-secondary">1</button></div>
                    <div className="col">  <button type="button" class="btn btn-secondary">2</button></div>
                    <div className="col"><button type="button" class="btn btn-secondary">3</button></div>
                    <div className="col"> <button type="button" class="btn btn-secondary">4</button></div>
                    <div className="col"><button type="button" class="btn btn-secondary">5</button></div>
                    <div className="col"><button type="button" class="btn btn-secondary">6</button></div>
                    <div className="col"><button type="button" class="btn btn-secondary">7</button></div>
                </div>
            </div>

            <h3>Choose training day</h3>
            <div className="button-container w-120px">
               <div className="row"> 
                    <div className="col"><button type="button" class="btn btn-secondary">Monday</button></div>
                    <div className="col">  <button type="button" class="btn btn-secondary">Tuesday</button></div>
                    <div className="col"><button type="button" class="btn btn-secondary">Wensday</button></div>
                    <div className="col"> <button type="button" class="btn btn-secondary">Thursday</button></div>
                    <div className="col"><button type="button" class="btn btn-secondary">Friday</button></div>
                    <div className="col"><button type="button" class="btn btn-secondary">Saturday</button></div>
                    <div className="col"><button type="button" class="btn btn-secondary">Sunday</button></div>
                </div>

                </div>
           <h3>Type training</h3>
            <div className="button-container w-120px">
               <div className="row"> 
                    <div className="col"><button type="button" class="btn btn-secondary">Fullbody</button></div>
                    <div className="col">  <button type="button" class="btn btn-secondary">Legs</button></div>
                    <div className="col"><button type="button" class="btn btn-secondary">Push-Pull</button></div>
                    <div className="col"> <button type="button" class="btn btn-secondary">Weider</button></div>
                    
                </div>





        </div> 

              <button type="button" class="btn btn-success">Continue</button>
       
      </main>
     
    </div>
  );
};

export default TrainingDays;