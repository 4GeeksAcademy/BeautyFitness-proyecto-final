import React from "react";
import "../../styles/routine.css";
const Routine= () => {
  return (
    <div>
     
      <main className="routine-container">
        <h1 className="mt-5">Routine</h1>
       
        <div className="button-container">
        <button type="button" class="btn btn-secondary">Create routine</button>
        <button type="button" class="btn btn-secondary">Sugest routine</button>
        <button type="button" class="btn btn-secondary">Change routine</button>
        <button type="button" class="btn btn-secondary">Select routine</button>
        <button type="button" class="btn btn-success mt-20 p-10">Continue</button>
        </div>
      </main>
    
    </div>
  );
};

export default Routine;
