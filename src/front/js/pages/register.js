import React from "react";
import { NavBar } from "../component/navBar";
import Footer from "../component/footer";
import FormRegister from "../component/formRegister";
 export const Register = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Register Page</h1>
        <FormRegister  />
      </main>
      <Footer />
    </div>
  );
};

