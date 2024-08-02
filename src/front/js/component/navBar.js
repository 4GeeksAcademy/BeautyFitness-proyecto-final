import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => { return (
  <nav className="navbar navbar-expand-lg bg-secondary mb-20">
    <div className="container-fluid ">
      <a className="navbar-brand" href="fab fa-linkedin-in mr-20px"></a>
      
      <i class="fa-duotone fa-solid fa-dumbbell fa-2xl"></i>
     
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse btn-secondary mt-20" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-link active" aria-current="page" href="#"></a>
          <Link to="signIn">
          <button type="submit" class="btn btn-primary">Sign in</button>
          </Link>
          <button type="submit" class="btn btn-primary ms-3">Register</button>
        </div>
      </div>
    </div>
  </nav>
  
  ); 
  }; 


