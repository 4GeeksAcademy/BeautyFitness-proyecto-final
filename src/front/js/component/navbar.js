import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-end">				
				<div>
					{ !store.token ?
						<div>
							<Link to="/login">
								<button className="btn btn-primary me-2">Log In</button>
							</Link>
							<Link to="/signup">
								<button className="btn btn-secondary">Sign Up</button>
							</Link>
						</div>
						:						
						<button onClick={() => actions.logout()} className="btn btn-primary">Log out</button>
					}
				</div>
			</div>
		</nav>
	);
};
