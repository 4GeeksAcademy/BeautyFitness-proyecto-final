import React from "react";
import "../../styles/profileExperienceLevel.css";
import { UserExperience } from "../component/UserExperience";


const ProfileExperienceLevel = () => {
  return (
     <div>
        <UserExperience />
         <main className="profileExperiencieLevel-container">
        <h1 className="mt-5">Profile Experience</h1>
        <h3>Experience Level</h3>
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
