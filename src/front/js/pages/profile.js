import React from "react";
import { NavBar } from "../component/navBar";
import Footer from "../component/footer";
import FormRegister from "../component/formRegister";

const Profile = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Profile Page</h1>
        <FormRegister />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
