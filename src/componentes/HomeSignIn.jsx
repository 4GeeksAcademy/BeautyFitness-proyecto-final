import React from "react";
import NavBar from "./NavBar.jsx";
import Text from "./Text.jsx";
import Card from "./Card.jsx";
import FormSignIn from "./Card.jsx";
import Footer from "./Footer.jsx";

const HomeSingIn = () => {
	return (
		<div >
			<NavBar />
			<Text />
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

export default HomeSingIn;
