import React from "react";
import { Link } from "react-router-dom";
import "../../styles/trainingDays.css";

const TrainingDays = () => {
  return (
    <div>
      <main className="trainingDays-container">
        <h1 className="mt-5">Training Days</h1>
        
        <h3 className="mt-4">How many days of training?</h3>
        <div className="container my-3">
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">1</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">2</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">3</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">4</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">5</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">6</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">7</button>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="mt-4">Choose Training Day</h3>
        <div className="container my-3">
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">Monday</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">Tuesday</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">Wednesday</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">Thursday</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">Friday</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">Saturday</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">Sunday</button>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="mt-4">Type of Training</h3>
        <div className="container my-3">
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">Fullbody</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">Legs</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">Push-Pull</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary w-100">Weider</button>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
        <Link to="/routine">
          <button type="button" className="btn btn-success w-100">Continue</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default TrainingDays;
