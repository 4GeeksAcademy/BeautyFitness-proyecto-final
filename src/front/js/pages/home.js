import React from "react";
import { Card } from "../component/Card";
import Footer from "../component/footer";
import { NavBar } from "../component/navBar";

export const Home = () => {
  return (
    <div>
     <NavBar />
      <div className="row align-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer /> 
    </div>
  );
};

