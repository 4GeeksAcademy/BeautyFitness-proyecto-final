import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardVideo = () => {
  return (
    <div className="col-xl-6">
      <div className="card d-flex justify-content-center mb-5 mt-4 mx-auto" style={{ width: "36rem" }}>
        <div className="d-flex align-items-center" style={{ padding: "10px" }}>
        <video src="..." class="object-fit-contain" autoplay></video>
          <div className="card-body">
            <FontAwesomeIcon icon="fa-regular fa-star" />
            <h5 className="card-title text-center">Review title</h5>
            <p className="card-text text-center">
              Dominadas
              <body>
                10x4
                Ejercicio de fuerza......
              </body>
            </p>
            <a class="btn btn-primary" href="#" role="button">Dominadas</a>
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

