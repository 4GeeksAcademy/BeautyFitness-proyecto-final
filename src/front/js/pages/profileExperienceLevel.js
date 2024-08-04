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
        <Link to="/trainingDays">
        <button type="button" class="btn btn-success w-100 btn-narrow">Continue</button>
        </Link>
        </div>
      </main>
    </div>
  );
};

export default ProfileExperienceLevel;
