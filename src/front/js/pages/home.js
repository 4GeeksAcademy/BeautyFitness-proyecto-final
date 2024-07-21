import React from "react";
import NavBar from "../../../componentes/NavBar.jsx";
//import Text from "./Text.jsx";
import Card from "../../../componentes/Card.jsx";
import Footer from "../../../componentes/Footer.jsx";

const Home = () => {
	return (
		<div >
			<NavBar />
			
			<div className="row align-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>

	);
};

export default Home;
