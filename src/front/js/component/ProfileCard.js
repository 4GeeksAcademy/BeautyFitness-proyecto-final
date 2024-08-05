import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProfileCard = () => {
  return (
    <div className="col-xl">
      <div className="card mb-5 mt-4 mx-auto" style={{ width: "36rem" }}>
        <div className=" align-items-center" style={{ padding: "10px" }}>
          <img 
            src="https://picsum.photos/200" 
            className="card-img-top" 
            alt="..." 
            style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover", marginRight: "10px" }} 
          />
          <div className="card-body">
            <FontAwesomeIcon icon="fa-regular fa-star" />
            <h5 className="card-title text-center">Personal Data</h5>
            <ul class="list-group list-group-flush">
    <li class="list-group-item">Gender</li>
    <li class="list-group-item">Date birthday</li>
    <li class="list-group-item">Height</li>
    <li class="list-group-item">Weight</li>
  </ul>
  <button type="button" class="btn btn-success mb-20">Continue</button>
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
