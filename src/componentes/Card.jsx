import React from "react";

const Card = () => {
  return (




    <div className="col-xl-3">

      <div className="card d-flex justify-content-center mb-5 mt-4 mx-auto" style={{ width: "18rem" }}>
        <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
        <div className="card-body">
          <FontAwesomeIcon icon="fa-regular fa-star" />
          <h5 className="card-title text-center">Card title</h5>
          <p className="card-text text-center">
            Lorem Ipsum es simplemente el texto de relleno de
            las imprentas y archivos de texto. Lorem Ipsum ha
            sido el texto de relleno estándar de las industrias
            desde el año 1500, cuando un impresor (N. del T.
          </p>
          <div className="container footer border-top" >
              <a href="#" className="btn btn-info mt-3 d-flex  justify-content-center">
                Find Out More!
              </a>
            
          </div>

        </div>
      </div>
    </div>
  );
};
export default Card;
