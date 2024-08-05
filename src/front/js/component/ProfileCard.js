import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const ProfileCard = () => {
  return (
    <div className="col-xl">
      <div className="card mb-5 mt-4 mx-auto" style={{ width: "36rem" }}>
        <div className=" align-items-center" style={{ padding: "10px" }}>
          <img 
            src="https://picsum.photos/200" 
            className="card-img-top img-fluid mx-auto d-block mt-4" 
            alt="..." 
            style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover", marginRight: "10px" }} 
          />
          <div className="card-body">
            <FontAwesomeIcon icon="fa-regular fa-star" />
            <h5 className="card-title text-center text-dark">Personal Data</h5>
            {/* <ul class="list-group list-group-flush">
    <li class="list-group-item">Gender</li>
    <li class="list-group-item">Date birthday</li>
    <li class="list-group-item">Height</li>
    <li class="list-group-item">Weight</li>
  </ul> */}

<form>
              <div className="form-group text-dark">
                <label htmlFor="gender">Gender</label>
                <select id="gender" className="form-control">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group text-dark">
                <label htmlFor="dateOfBirth ">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  className="form-control"
                />
              </div>
              <div className="form-group text-dark">
                <label htmlFor="height">Height (cm)</label>
                <input
                  type="number"
                  id="height"
                  className="form-control"
                  placeholder="Enter your height"
                />
              </div>
              <div className="form-group text-dark">
                <label htmlFor="weight">Weight (kg)</label>
                <input
                  type="number"
                  id="weight"
                  className="form-control"
                  placeholder="Enter your weight"
                />
              </div>
   </form>
   <div className="text-center mb-5 text-dark">
        <div className="d-flex justify-content-center gap-3">
        <Link to="/signup">
          <button type="button" className="d-flex btn btn-secondary w-100 mr-1 mt-4 bg-dark">Back</button>
        </Link>
        <div className="text-center ml-5"></div>
  <Link to="/suscriptionInfo">
  <button type="button" class="btn btn-success d-flex mx-auto d-block justify-content-center mt-4">Continue</button>
  </Link>
          </div>
          </div>
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
