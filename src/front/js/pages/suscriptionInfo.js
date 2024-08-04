import React from "react";
import "../../styles/profile.css";

import { ProfileSuscription } from "../component/ProfileSuscription";

const SuscriptionInfo = () => {
  return (
    <main className="profile-container">
     <div className="center">
        <h1 className="mt-5 text-center">Suscription Information</h1>
        <h3 className="mt-5"></h3>
        <ProfileSuscription />
              
        </div>
        </main>
    
  );
};
export default SuscriptionInfo
// export default SuscriptionInfo;
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export const Subscriptioninfo = () => {
//   // Estado para los datos del perfil
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     gender: '',
//     age: '',
//     height: '',
//     weight: '',
//     subscription: '',
//     goals: '',
//   });

//   // Maneja el cambio en los campos del formulario
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="col-xl">
//       <div className="card mb-5 mt-4 mx-auto" style={{ width: "36rem" }}>
//         <div className="text-center" style={{ padding: "10px" }}>
//           <img 
//             src="https://picsum.photos/200" 
//             className="card-img-top img-fluid mx-auto d-block mt-4" 
//             alt="Profile" 
//             style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover"}} 
//           />
//         </div>
//         <div className="card-body">
//           <FontAwesomeIcon icon="fa-regular fa-star" />
//           <h5 className="card-title text-center">Personal Data</h5>

//           <form>
//             <div className="mb-3">
//               <label htmlFor="username" className="form-label">Username</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="gender" className="form-label">Gender</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="gender"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="age" className="form-label">Age</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="age"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="height" className="form-label">Height</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="height"
//                 name="height"
//                 value={formData.height}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="weight" className="form-label">Weight</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="weight"
//                 name="weight"
//                 value={formData.weight}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="subscription" className="form-label">Subscription</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="subscription"
//                 name="subscription"
//                 value={formData.subscription}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="goals" className="form-label">Goals</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="goals"
//                 name="goals"
//                 value={formData.goals}
//                 onChange={handleChange}
//               />
//             </div>

//             <button
//               type="button"
//               className="btn btn-success d-flex mx-auto d-block justify-content-center mt-3"
//             >
//               Continue
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
