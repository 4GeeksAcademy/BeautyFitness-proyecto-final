// import React from "react";
// import { CardWorkout } from "../component/CardWorkout";


// const Workout = () => {
//   return (
//     <div>

//       <h1>ABS Workout </h1>
//       <h3>26 WorkoutS</h3>
//       <h5>25 mins</h5>

//       <div className="row align-center">
//         <CardWorkout />
//         <CardWorkout />
//         <CardWorkout />
//         <CardWorkout />
//       </div>

//     </div>
//   );
// };

// export default Workout;

import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


// import "../../styles/home.css";
// import { Card } from "../component/Card";
// //import Footer from "../component/footer";
// //import { NavBar } from "../component/navBar";

const Workout = () => {
  const { store, actions } = useContext(Context);

  // useEffect(() => {
  //     if (store.token && store.token !== "" && store.token !== undefined) actions.getMessage();
  // }, [store.token]);


  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-6 col-md-3 col-lg-2 mb-1">
          <CardWorkout />
          <CardWorkout />
          <CardWorkout />
          <CardWorkout />
        </div>
      </div>
    </div>
  );
};

export default Workout;