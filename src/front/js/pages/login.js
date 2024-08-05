import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { FormLogin } from "../component/formLogin";

export const Login = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (store.token) {
            navigate("/");
        }
    }, [store.token]);

    return (
        <div>
            <FormLogin/>
        </div>
    );
};

Login.propTypes = {
    match: PropTypes.object
};
