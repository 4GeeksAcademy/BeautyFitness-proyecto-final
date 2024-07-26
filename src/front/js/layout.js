import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
//import { BackendURL } from "./component/backendURL";

//import Home from "../js/pages/home.js";

import injectContext from "./store/appContext";
import { Home } from "./pages/home";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <navbar /> {/* Descomentado para que el Navbar se muestre */}
                    <Routes>
                        <Route element={<Home />} path="/" /> 
                        <Route element={<profile />} path="/profile" />
                        <Route element={<register />} path="/register/:theid" />
                        <Route element={<singIn />} path="/singIn/:theid" />
                        <Route element={<single />} path="/single/:theid" /> {/* Asegúrate de que esta ruta sea única */}
                        <Route element={<workout />} path="/workout/:theid" /> 
                        <Route element={<workoutList />} path="/workoutList/:theid" /> 
                        <Route element={<h1>Not found!</h1>} path="*" /> {/* Añadido path="*" */}
                    </Routes>  
                    <footer /> {/* Descomentado para que el Footer se muestre */}
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
