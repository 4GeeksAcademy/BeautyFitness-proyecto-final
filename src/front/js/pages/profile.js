import React from "react";
import { NavBar } from "../component/navBar";
import Footer from "../component/footer";
 
export const Profile = () => {
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

