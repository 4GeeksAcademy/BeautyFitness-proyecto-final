import React from "react";
import { NavBar } from "../component/navBar";
import Footer from "../component/footer";
import "../../styles/profileExperienceLevel.css";
const ProfileExperienceLevel = () => {
  return (
     <div>
        <NavBar />
         <main className="profileExperiencieLevel-container">
        <h1>Profile Objetive</h1>
        <h1>Objetive type</h1>
        <div className="button-container">
        <button type="button" class="btn btn-secondary">BIGGINER</button>
        <button type="button" class="btn btn-secondary">INTERMEDIATE</button>
        <button type="button" class="btn btn-secondary">ADVANCED</button>
        <button type="button" class="btn btn-success">Continue</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileExperienceLevel;
