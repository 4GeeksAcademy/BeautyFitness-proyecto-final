import React from "react";
import "../../styles/profileExperienceLevel.css";
const ProfileExperienceLevel = () => {
  return (
     <div>
         <main className="profileExperiencieLevel-container">
        <h1 className="mt-5">Profile Objetive</h1>
        <h3>Objetive type</h3>
        <div className="button-container">
        <button type="button" class="btn btn-secondary">BIGGINER</button>
        <button type="button" class="btn btn-secondary">INTERMEDIATE</button>
        <button type="button" class="btn btn-secondary">ADVANCED</button>
        <button type="button" class="btn btn-success">Continue</button>
        </div>
      </main>
    </div>
  );
};

export default ProfileExperienceLevel;
