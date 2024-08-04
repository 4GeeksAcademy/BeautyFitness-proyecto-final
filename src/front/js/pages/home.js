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
        <div>

        </div>
      )}
      </div>
    );
};

