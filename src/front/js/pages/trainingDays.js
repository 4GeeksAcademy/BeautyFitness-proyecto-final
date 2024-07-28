import React from "react";
import { NavBar } from "../component/navBar";
import Footer from "../component/footer";

const ProfileExperienceLevel = () => {
  return (
     <div>
        <NavBar />
         <main>
        <h1>Profile Objetive</h1>
        <h1>Objetive type</h1>
        <button type="button" class="btn btn-secondary">BIGGINER</button>
        <button type="button" class="btn btn-secondary">INTERMEDIATE</button>
        <button type="button" class="btn btn-secondary">ADVANCED</button>
        <button type="button" class="btn btn-success">Continue</button>
      </main>
      <Footer />
    </div>
  );
};

export default trainingDays;