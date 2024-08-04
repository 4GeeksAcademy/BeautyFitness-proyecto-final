import React from "react";
import { Link } from "react-router-dom";
import "../../styles/routine.css";
const Routine= () => {
  return (
    <div>
     
      <main className="routine-container">
        <h1 className="mt-5">Routine</h1>
       
        <div className="button-container">
        <Link to="/trainingDays">
        <button type="button" class="btn btn-secondary w-100">Create routine</button>
        </Link>
        <Link to="/trainingDays">
        <button type="button" class="btn btn-secondary w-100">Sugest routine</button>
        </Link>
        <Link to="/trainingDays">
        <button type="button" class="btn btn-secondary w-100">Change routine</button>
        </Link>
        <Link to="/trainingDays">
        <button type="button" class="btn btn-secondary w-100">Select routine</button>
        </Link>

        <div className="text-center mb-5">
        <div className="d-flex justify-content-center gap-3">
        <Link to="/profileExperienceLevel">
          <button type="button" className="d-flex btn btn-secondary w-100 mr-1">Back</button>
        </Link>
        <div className="text-center ml-5"></div>
        </div>
        
        </div>
        


        </div>
        
      </main>
    
    </div>
  );
};

export default Routine;
