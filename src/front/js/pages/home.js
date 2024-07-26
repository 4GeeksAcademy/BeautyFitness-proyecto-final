import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined) actions.getMessage();
    }, [store.token]);

    return (
        <div className="text-center mt-5">
			<div className="mb-5">
            </div>
            <h1>Hello Rigo!!</h1>
            <p>
                <img src={rigoImageUrl} alt="Rigo Baby" />
            </p>
            <div className="alert alert-info">
                {store.message}
            </div>
            <p>
                This boilerplate comes with lots of documentation:{" "}
                <a href="https://start.4geeksacademy.com/starters/react-flask">
                    Read documentation
                </a>
            </p>
        </div>
    );
};
