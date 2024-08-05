// import React from "react";

// export const CardWorkout = () => {
//   return (
//     <div className="col-xl-3">
//       <div class="card" style="width: 18rem;">
//       <img src="..." class="rounded mx-auto d-block" alt="..." />
//   <div class="card-body">
//     <h5 class="card-title">ABS Workout</h5>
//     <p class="card-text">Body text for whatever you'd like.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//   );
// };

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardWorkout = () => {
  return (
    <div className="col-xl-6">
      <div className="card mb-5 mt-4 mx-auto" style={{ width: "15rem" }}>
      <div className=" align-items-center" style={{ padding: "10px" }}>
          <img 
            src="https://picsum.photos/200" 
            className="card-img-top img-fluid mx-auto d-block mt-4" 
            alt="..." 
            style={{ borderRadius: "0%", width: "150px", height: "150px", objectFit: "cover", marginRight: "10px" }} 
          />
          <div className="card-body">
            <FontAwesomeIcon icon="fa-regular fa-star" />
            <h3 className="card-title text-center text-dark">Title</h3>
            <p className="card-text text-center text-dark">
              Body text for whatever you'd like
             
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


export default CardWorkout;




