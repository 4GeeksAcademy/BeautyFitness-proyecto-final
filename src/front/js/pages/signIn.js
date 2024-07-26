import React from "react";
import { NavBar } from "../component/navBar";
import Footer from "../component/footer";
import FormSignIn from "../component/formSignIn";

 export const SignIn = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Sign In Page</h1>
        <FormSignIn />
      </main>
      <Footer />
    </div>
  );
};
