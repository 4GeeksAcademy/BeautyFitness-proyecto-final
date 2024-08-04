// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export const ProfileSuscription = () => {
//   return (
//     <div className="col-xl">
//       <div className="card mb-5 mt-4 mx-auto" style={{ width: "36rem" }}>
//         <div className="align-items-text-center" style={{ padding: "10px" }}>
//           <div className= "text-center">
//           <img 
//             src="https://picsum.photos/200" 
//             className="card-img-top img-fluid mx-auto d-bloxk mt-4" 
//             alt="..." 
//             style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover"}} 
//           />
//           </div>
//           <div className="card-body">
//             <FontAwesomeIcon icon="fa-regular fa-star" />
//             <h5 className="card-title text-center">Personal Data</h5>

//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">Username</li>
//                 <li class="list-group-item">Password</li>
//                 <li class="list-group-item">Gender</li>
//                 <li class="list-group-item">Age</li>
//                 <li class="list-group-item">Height</li>
//                 <li class="list-group-item">Weight</li>
//                 <li class="list-group-item">Suscription</li>
//                 <li class="list-group-item">Goals</li>
//             </ul>
//               <button type="button" class="btn btn-success d-flex mx-auto d-block justify-content-center mt-1">Continue</button>
//           </div>
//        </div>
//          {/*<div className="container footer border-top" style={{ padding: "10px" }}>
//           <a href="#" className="btn btn-info mt-3 d-flex justify-content-center">
//             Find Out More!
//           </a>
//         </div>*/}
//       </div>
//     </div>
//   );
// };
//

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/profileSuscription.css";
import "../../styles/suscriptionInfo.css";
import { Link } from "react-router-dom";


export const ProfileSuscription = () => {
  // Estado para los datos del perfil
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    subscription: '',
    goals: '',
  });

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="col-xl">
      <div className="card mb-1 mt-1 mx-auto" style={{ width: "36rem", minHeight: "500px"}}>
        <div className="text-center" style={{ padding: "10px" }}>
          <img 
            src="https://picsum.photos/200" 
            className="card-img-top img-fluid mx-auto d-block mt-4" 
            alt="Profile" 
            style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover"}} 
          />
        </div>
        <div className="card-body">
          <FontAwesomeIcon icon="fa-regular fa-star" />
          <h5 className="card-title text-center">Personal Data</h5>

          <formData>
            <div className="mb-1">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-1">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-1">
              <label htmlFor="gender" className="form-label">Gender</label>
              <input
                type="text"
                className="form-control"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Enter your gender"
              />
            </div>

            <div className="mb-1">
              <label htmlFor="age" className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
              />
            </div>

            <div className="mb-1">
              <label htmlFor="height" className="form-label">Height</label>
              <input
                type="text"
                className="form-control"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Enter your height"
              />
            </div>

            <div className="mb-1">
              <label htmlFor="weight" className="form-label">Weight</label>
              <input
                type="text"
                className="form-control"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Enter your weight"
              />
            </div>

            <div className="mb-1">
              <label htmlFor="subscription" className="form-label">Subscription</label>
              <input
                type="text"
                className="form-control"
                id="subscription"
                name="subscription"
                value={formData.subscription}
                onChange={handleChange}
                placeholder="Enter your subscription"
              />
            </div>

            <div className="mb-1">
              <label htmlFor="goals" className="form-label">Goals</label>
              <input
                type="text"
                className="form-control"
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                placeholder="Enter your goals"
              />
            </div>

            <Link to="/profileObjetive" >
            <button
              type="button"
              className="btn btn-success d-flex mx-auto d-block justify-content-center mt-3"
            >Continue</button>
            </Link>
          </formData>
        </div>
      </div>
    </div>
  );
};

