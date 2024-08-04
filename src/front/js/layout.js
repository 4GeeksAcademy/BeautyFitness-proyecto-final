import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

import { SignUp } from "./pages/signUp";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import { UpdateProfile } from "./pages/updateProfile";
import Profile from"./pages/profile";
import {Single} from "./pages/single"; // Importa el componente Single
import Workout from "./pages/workout"; // Importa el componente Workout
import WorkoutList from "./pages/workoutList"; // Importa el componente WorkoutList
import ProfileExperienceLevel from"./pages/profileExperienceLevel";
import ProfileObjetive from "./pages/profileObjetive";
import TrainingDays from "./pages/trainingDays";
import Routine from "./pages/routine";
import SuscriptionInfo from "./pages/suscriptionInfo";
import VideoWorkout from "./pages/videoWorkout";
import DayRoutine from "./pages/dayRoutine";
import Day from "./pages/day";
import { Navbar } from "./component/navbar";
import SignIn from "./pages/signIn";
// import Single from "./pages/single";
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div className="bg-dark text-light h-100">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar /> {/* Descomentado para que el Navbar se muestre */}
                    <Routes>
                        <Route element={<Home />} path="/" /> 
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<SignUp />} path="/signup" />
                        <Route element={<SignIn />} path="/pages/sigin" />
                        <Route element={<UpdateProfile />} path="/update-profile" />
                        <Route element={<Single />} path="/single" /> {/* Asegúrate de que esta ruta sea única */}
                        {/* <Route element={<Single />} path="/single/:theid" /> */}
                        <Route element={<Workout />} path="/workout" /> 
                        <Route element={<WorkoutList />} path="/workoutList" /> 
                        <Route element={<ProfileExperienceLevel  />} path="/profileexperiencelevel" />
                        <Route element={<ProfileObjetive  />} path="/profileObjetive" />
                        <Route element={<Day />} path="/day" />
                        <Route element={<TrainingDays />} path="/trainingDays" />
                        <Route element={<DayRoutine />} path="/dayRoutine" />
                        <Route element={<VideoWorkout />} path="/videoWorkout" />
                        <Route element={<SuscriptionInfo />} path="/suscriptionInfo" />
                        <Route element={<Routine  />} path="/routine" />
                        <Route element={<h1>Not found!</h1>} path="*" />
                    </Routes>  
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
