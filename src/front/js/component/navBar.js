import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => { return (
  <nav className="navbar navbar-expand-lg bg-secondary mb-20">
    <div className="container-fluid ">
      <a className="navbar-brand" href="#">LOGO</a>
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
      <div className="collapse navbar-collapse btn-secondary" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <button type="submit" class="btn btn-primary">Sign in</button>
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  </nav>
  
  ); 
  }; 


