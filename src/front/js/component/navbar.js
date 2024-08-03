// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const Navbar = () => {
// 	const {store, actions} = useContext(Context)
// 	return (
// 		<nav className="navbar navbar-light bg-light">
// 			<div className="container d-flex justify-content-end">				
// 				<div>
// 					{ !store.token ?
// 						<div>
// 							<Link to="/login">
// 								<button className="btn btn-primary me-2">Log In</button>
// 							</Link>
// 							<Link to="/signup">
// 								<button className="btn btn-secondary">Sign Up</button>
// 							</Link>
// 						</div>
// 						:						
// 						<button onClick={() => actions.logout()} className="btn btn-primary">Log out</button>
// 					}
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleLogout = () => {
        actions.logout();
        navigate("/");
    };

	return (
		<nav className="navbar navbar-light bg-light">
					{!store.token ? (
						<div className="container-fluid">
							<div>
								<Link to="/">
									<img
										src="https://cdn-icons-png.freepik.com/128/5696/5696283.png"
										className="img-fluid w-25 h-auto"
									/>
								</Link>
							</div>
							<div>
								<Link to="/login">
									<button className="btn btn-primary me-2">Log In</button>
								</Link>
								<Link to="/signup">
									<button className="btn btn-secondary">Sign Up</button>
								</Link>
							</div>							
						</div>
					) : (
						<div className="container-fluid">
							<div>
								<Link to="/">
									<img
										src="https://cdn-icons-png.freepik.com/128/5696/5696283.png"
										className="img-fluid w-25 h-auto"
									/>
								</Link>
							</div>
							<div>
								<Link to="/update-profile">
									<button className="btn btn-secondary me-2">Update Profile</button>
								</Link>
								<button onClick={handleLogout} className="btn btn-primary">Log out</button>
							</div>
						</div>
					)}
		</nav>
	);
};

