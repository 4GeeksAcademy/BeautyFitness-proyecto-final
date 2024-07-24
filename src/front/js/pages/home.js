import React from "react";
import navBar from "../componentes/navBar.jsx";
//import Text from "./Text.jsx";
import Card from "../component/Card.jsx";
import Footer from "../componentes/Footer.jsx";


const Home = () => {
	return (
		<div>
			<navBar />
			
			<div className="row align-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<footer />
		</div>

	);
};


