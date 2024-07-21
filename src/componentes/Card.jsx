import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
  return (
    <div className="col-xl-6">
      <div className="card d-flex justify-content-center mb-5 mt-4 mx-auto" style={{ width: "36rem" }}>
        <div className="d-flex align-items-center" style={{ padding: "10px" }}>
          <img 
            src="https://picsum.photos/200" 
            className="card-img-top" 
            alt="..." 
            style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover", marginRight: "10px" }} 
          />
          <div className="card-body">
            <FontAwesomeIcon icon="fa-regular fa-star" />
            <h5 className="card-title text-center">Review title</h5>
            <p className="card-text text-center">
              Review body
              <body>
                Reviewer name
                Date
              </body>
            </p>
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

export default Card;




