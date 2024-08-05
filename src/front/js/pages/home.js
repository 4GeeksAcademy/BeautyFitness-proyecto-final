import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/Card";
//import Footer from "../component/footer";
//import { NavBar } from "../component/navBar";

export const Home = () => {
    const { store, actions } = useContext(Context);

    // useEffect(() => {
    //     if (store.token && store.token !== "" && store.token !== undefined) actions.getMessage();
    // }, [store.token]);

  
    return (
      <div className="bg-dark">
        <div className="bg-warning text-dark">
        <h1 className="mt-5 text-center">PERSONALIZED TRAINING</h1>
        <div className="bg-light">
        <div className="container mt-4 custom-container">
      <div className="p-4 rounded" style={{ backgroundColor: '#f8f9fa' }}>
        <ul className="list-unstyled">
          <li className="mb-3">-Personalized Training: Training plans adapted to your goals and level</li>
          <li className="mb-3">-Explanation GIFs for better understanding</li>
          <li className="mb-3">-Progress Monitoring: Track your progress with our tools</li>
          <li className="mb-3">-Join our live and recorded programs</li>
        </ul>
      </div>
    </div>
        </div>
        </div>
        <h1 className="mt-5 text-center">"Personalized and accessible training program for all levels"</h1> 
        <div className="bg-success-subtle text-dark ">
        <h2 className="mt-5 mb-1 text-center">PERSONALIZED TRAINING</h2>
        </div>
        <div className="d-flex justify-content-center">
        <Link to="register">
        
            <button type="button" className="btn bg-primary align-center text-light mx-2 ">
              Register
            </button> 
            </Link></div>
        <h4 className="mt-2 text-center">Testimonies</h4> 
        <h5 className="mt-1 text-center color-text-yellow">What our users say...</h5> 
        <div className="row align-center">      
        
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
};

