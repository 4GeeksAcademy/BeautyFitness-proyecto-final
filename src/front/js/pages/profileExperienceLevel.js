import React from "react";
import "../../styles/profileExperienceLevel.css";
import { Link } from "react-router-dom";
const ProfileExperienceLevel = () => {
  return (
     <div>
         <main className="profileExperiencieLevel-container">
        <h1 className="mt-5">Profile Experience</h1>
        <h3>Experience Level</h3>
        <div className="button-container  text-center">
        <button type="button" class="btn btn-secondary ">BIGGINER</button>
        <button type="button" class="btn btn-secondary ">INTERMEDIATE</button>
        <button type="button" class="btn btn-secondary ">ADVANCED</button>

        
        <div className="text-center mb-5">
        <div className="d-flex justify-content-center gap-3">
        <Link to="/profileObjetive">
          <button type="button" className="d-flex btn btn-secondary w-100 mr-1">Back</button>
        </Link>
        <div className="text-center ml-5"></div>
        <Link to="/routine">
        <button type="button" class="btn btn-success w-100 ">Continue</button>
        </Link>
        </div></div></div>
      </main>
    </div>
  );
};

export default ProfileExperienceLevel;
