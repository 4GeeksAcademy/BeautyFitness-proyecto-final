import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/Card";

export const Home = () => {
    const { store, actions } = useContext(Context);

    // useEffect(() => {
    //     if (store.token && store.token !== "" && store.token !== undefined) actions.getMessage();
    // }, [store.token]);

  
    return (
      <div>
        {!store.token ? (
        <div className="row align-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      ): (
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 d-flex justify-content-center align-items-center">
            <div className="col homeClick m-2">
              <Link to="/exercices">
                <h1 className="text-dark text-center display-4 fw-semibold">
                  Exercises
                </h1>
              </Link>
            </div>
            <div className="col homeClick m-2">
              <h1 className="text-dark text-center display-4 fw-semibold">
                Custom Workout
              </h1>
            </div>
            <div className="col homeClick m-2">
              <h1 className="text-dark text-center display-4 fw-semibold">
                Exercises
              </h1>
            </div>
            <div className="col homeClick m-2">
              <h1 className="text-dark text-center display-4 fw-semibold">
                Exercises
              </h1>
            </div>
          </div>
        </div>
      )}
      </div>
    );
};

