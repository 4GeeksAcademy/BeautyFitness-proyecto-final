import React from "react";
import "../../styles/profileObjetive.css";
const ProfileObjetive = () => {
  return (
    <div>
     
      <main className="profileObjetive-container">
        <h1 className="mt-5">Profile Objetive</h1>
        <h3>Objetive type</h3>
        <div className="button-container">
        <button type="button" class="btn btn-secondary">HYPERTROPHY</button>
        <button type="button" class="btn btn-secondary">WEIGHTLOSS</button>
        <button type="button" class="btn btn-secondary">MUSCLE DEFINITION</button>
        <button type="button" class="btn btn-success mt-20 p-10">Continue</button>
        </div>
      </main>
    
    </div>
  );
};

export default ProfileObjetive;
