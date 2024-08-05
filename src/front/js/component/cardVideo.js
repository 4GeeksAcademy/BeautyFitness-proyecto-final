import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export const CardVideo = () => {
  return (

    <div className="col-xl-6 ">
    <div className="card mb-5 mt-4 mx-auto justify-content-center" style={{ width: "36rem" }}>
      <div className=" justify-content-center" style={{ padding: "10px" }}>
      <video src="..." class="object-fit-contain" autoplay style={{ width: "100%", height: "auto" }}></video>

      </div> 
      </div> 

    <div className="col-xl-6 ">
      <div className="card  mb-5 mt-4 ml-50 mx-auto" style={{ width: "36rem" }}>
        <div className=" justify-content-center" style={{ padding: "10px" }}>
       
          <div className="card-body text-center">
            <FontAwesomeIcon icon="fa-regular fa-star" />
            <h5 className="card-title ">Review title</h5>
            <p className="card-text text-center">
              Dominadas
              <body>
                10x4
                Ejercicio de fuerza......
              </body>
            </p>
            <Link to="/video-details">
          </Link></div>
          </div>
       </div>
         {/*<div className="container footer border-top" style={{ padding: "10px" }}>
          <a href="#" className="btn btn-info mt-3 d-flex justify-content-center">
            Find Out More!
          </a>
        </div>*/}
      </div>
      </div> 
    
  );
};

