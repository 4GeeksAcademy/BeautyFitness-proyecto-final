import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { FormLogin } from "../component/formLogin";

export const Login = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<FormLogin/>
		</div>
	);
};

Login.propTypes = {
	match: PropTypes.object
};
