import React from "react";
import { NavBar } from "../component/navBar";
import Footer from "../component/footer";

const ProfileObjetive = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Profile Objetive</h1>
        <h1>Objetive type</h1>
        <button type="button" class="btn btn-secondary">HYPERTROPHY</button>
        <button type="button" class="btn btn-secondary">WEIGHTLOSS</button>
        <button type="button" class="btn btn-secondary">MUSCLE DEFINITION</button>
        <button type="button" class="btn btn-success">Continue</button>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileObjetive;
