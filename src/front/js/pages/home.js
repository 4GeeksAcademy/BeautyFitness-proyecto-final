// import React, { useContext } from "react";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";
// import "../../styles/home.css";
// import { Card } from "../component/Card";

// export const Home = () => {
//   const { store, actions } = useContext(Context);

//   return (
//     <main className="bg-dark p-2">
//       <div className="container mt-4">
//         {/* Header Box */}
//         <div className="bg-warning text-dark rounded p-4">
//         <h2 className="mt-1 text-center">"PERSONALIZED TRAINING"</h2>
//           <h3 className="text-center mb-0">
//             Personalized and accessible training program for all levels
//           </h3>
//         </div>

//         {/* Features List */}
//         <div className="bg-light rounded mt-4 p-4 text-dark" style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1521805103424-d8f8430e8933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             color: 'white', // Cambia el color del texto para mayor contraste
//           }}>
//           <h3 className="text-center mb-2 text-light">
//             "ADVANTAGES"
//           </h3>
//           <ul className="list-unstyled">
//             <li className="mb-2 text-center text-light">- Personalized Training: Training plans adapted to your goals and level;</li>
//             <li className="mb-2 text-center text-light">- Explanation GIFs for better understanding;</li>
//             <li className="mb-2 text-center text-light">- Progress Monitoring: Track your progress with our tools;</li>
//             <li className="mb-2 text-center text-light">- Join our live and recorded programs.</li>
//           </ul>
//         </div>

//         {/* Subheading */}
        

//         {/* Call to Action Button */}
//         <div className="d-flex justify-content-center my-4">
//           <Link to="signup">
//             <button type="button" className="btn btn-primary text-light">Book Now</button>
//           </Link>
//         </div>

//         {/* Testimonials Section */}
//         <div className="testimonials-section mt-5">
//           <h4 className="text-center">Testimonies</h4>
//           <h5 className="text-center mb-4">What our users say...</h5>
//           <div className="row">
//             <div className="col-12 col-md-4 mb-4">
//               <Card />
//             </div>
//             <div className="col-12 col-md-4 mb-4">
//               <Card />
//             </div>
//             <div className="col-12 col-md-4 mb-4">
//               <Card />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Card } from "../component/Card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <main className="bg-dark p-2">
      <div className="container-fluid align-justify-center mt-4">
        {/* Header Box */}
        <div className="bg-warning text-dark rounded p-4">
          <h2 className="mt-1 text-center">"PERSONALIZED TRAINING"</h2>
          <h3 className="text-center mb-0">
            Personalized and accessible training program for all levels
          </h3>
        </div>

        {/* Features List */}
        <div
          className="bg-light rounded mt-4 p-4 text-dark"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1521805103424-d8f8430e8933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white', // Cambia el color del texto para mayor contraste
          }}
        >
          <h3 className="text-center mb-2 text-light">"ADVANTAGES"</h3>
          <ul className="list-unstyled">
            <li className="mb-2 text-center text-light">
              - Personalized Training: Training plans adapted to your goals and level;
            </li>
            <li className="mb-2 text-center text-light">
              - Explanation GIFs for better understanding;
            </li>
            <li className="mb-2 text-center text-light">
              - Progress Monitoring: Track your progress with our tools;
            </li>
            <li className="mb-2 text-center text-light">
              - Join our live and recorded programs.
            </li>
          </ul>
        </div>
        </div>
        {/* Call to Action Button */}
        <div className="d-flex justify-content-center my-4">
          <Link to="signup">
            <button type="button" className="btn btn-primary text-light">
              Book Now
            </button>
          </Link>
        </div>

        {/* Testimonials Section */}
        <body className= "justify-content-center bg-dark mt-1">
        <div className="testimonials-section mt-1">
          <h4 className="text-center mt-2 text-light">Testimonies</h4>
          <h5 className="text-center mb-4 text-light">What our users say...</h5>

          <div className="row align-center">
            <div className="col-3 col-sm-6 col-md-4 mb-4">
              <Card />
            </div>
            <div className="col-3 col-sm-6 col-md-4 mb-4">
              <Card />
            </div>
            <div className="col-3 col-sm-6 col-md-4 mb-4">
              <Card />
            </div>
            {/* Puedes agregar más tarjetas aquí si es necesario */}
           
          
      
       
       </div>
        </div>
        </body>
    </main>
  );
};
