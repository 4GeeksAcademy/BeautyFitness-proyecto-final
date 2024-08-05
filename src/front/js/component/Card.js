import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = () => {
  return (
    <div className="col-xl-6">
      <div className="card d-flex justify-content-center mb-5 mt-1 mx-auto" style={{ width: "20rem" }}>
        <div className="d-flex align-items-center" style={{ padding: "10px" }}>
          <img 
            src="https://picsum.photos/200" 
            className="card-img-top" 
            alt="..." 
            style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover", marginRight: "10px" }} 
          />
          <div className="card-body">
            <FontAwesomeIcon icon="fa-regular fa-star" />
            <h3 className="card-title text-center text-dark">Review title</h3>
            <p className="card-text text-center text-dark">
            "This app changed my life. I feel healthier and more energetic now."
              <body>
                <h5>Joan T.</h5>
               <h6>03 Agost</h6> 
              </body>
            </p>
          </div>
       </div>
         
      </div>
    </div>

    
  );
};






