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
        </div>
      </main>
    
    </div>
  );
};

export default Routine;
