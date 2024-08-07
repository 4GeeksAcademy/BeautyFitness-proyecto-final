import React from "react";
export const CardWorkout = () => {
  return (
    <div className="col-xl-3">
      <div className="card" style={{width: 18 + 'rem'}}>
      <img src="..." className="rounded mx-auto d-block" alt="..." />
  <div className="card-body">
    <h5 className="card-title">ABS Workout</h5>
    <p className="card-text">Body text for whatever you'd like.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  );
};

export default CardWorkout;