import React from "react";
//import Text from "./Text.js";
import Card from "../component/Card.js";


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

export default Home;
