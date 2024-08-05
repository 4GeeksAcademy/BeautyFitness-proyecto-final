import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/Card";
//import Footer from "../component/footer";
//import { NavBar } from "../component/navBar";

export const Home = () => {
    const { store, actions } = useContext(Context);

    // useEffect(() => {
    //     if (store.token && store.token !== "" && store.token !== undefined) actions.getMessage();
    // }, [store.token]);

  
    return (
      <div>
        <div className="row align-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
};

