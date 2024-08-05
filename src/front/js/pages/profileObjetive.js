import React from "react";
import "../../styles/profileObjetive.css";
import { Link } from "react-router-dom";
const ProfileObjetive = () => {
  return (
    <div >

      <main className="profileObjetive-container">
        <h1 className="mt-5 mb-1">Profile Objetive</h1>
        <h3 className="mt-1">Objetive type</h3>
        <div className="button-container text-center">
          <button type="button" class="btn btn-secondary">HYPERTROPHY</button>
          <button type="button" class="btn btn-secondary">WEIGHTLOSS</button>
          <button type="button" class="btn btn-secondary">MUSCLE DEFINITION</button>

          <div className="text-center mb-5">
        <div className="d-flex justify-content-center gap-3">
        <Link to="/suscriptionInfo">
          <button type="button" className="d-flex btn btn-secondary w-100 mr-1 bg-dark">Back</button>
        </Link>
        <div className="text-center ml-5"></div>
          <Link to="/profileExperienceLevel">
            <button type="button" class="btn btn-success w-100 ">Continue</button>
          </Link>
        </div> </div> </div>
      </main>

    </div>
  );
};

export default ProfileObjetive;
