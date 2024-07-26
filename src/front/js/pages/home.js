import React from "react";
import NavBar from "../components/navBar.js"; // Asegúrate de que la ruta sea correcta
import Card from "../components/Card.js"; // Asegúrate de que la ruta sea correcta
import Footer from "../components/Footer.js"; // Asegúrate de que la ruta sea correcta

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

