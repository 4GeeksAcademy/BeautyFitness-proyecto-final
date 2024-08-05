import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Card } from "../component/Card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <main className="bg-dark p-2">
      <div className="container mt-4">
        {/* Header Box */}
        <div className="bg-warning text-dark rounded p-4">
          <h3 className="text-center mb-0">
            "Personalized and accessible training program for all levels"
          </h3>
        </div>

        {/* Features List */}
        <div className="bg-light rounded mt-4 p-4 text-dark"> 
          <h3 className="text-center mb-0 text-success mb-2">
            "ADVANTAGES"
          </h3>
          <ul className="list-unstyled mb-0">
            <li className="mb-2 text-center">- Personalized Training: Training plans adapted to your goals and level;</li>
            <li className="mb-2 text-center">- Explanation GIFs for better understanding;</li>
            <li className="mb-2 text-center">- Progress Monitoring: Track your progress with our tools;</li>
            <li className="mb-2 text-center">- Join our live and recorded programs.</li>
          </ul>
        </div>

        {/* Subheading */}
        <h2 className="mt-5 text-center">"PERSONALIZED TRAINING"</h2>

        {/* Call to Action Button */}
        <div className="d-flex justify-content-center my-4">
          <Link to="signup">
            <button type="button" className="btn btn-primary text-light">Book Now</button>
          </Link>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section mt-5">
          <h4 className="text-center">Testimonies</h4>
          <h5 className="text-center mb-4">What our users say...</h5>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
