import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/exercices.css"

export const Exercices = () => {
    return (
        <div className="d-flex justify-content-center align-items-center container">
            <div className="row d-flex flex-column">
                <img 
                src="https://static.vecteezy.com/system/resources/previews/008/545/942/original/back-muscles-educational-anatomical-diagram-posterior-model-of-human-structure-and-arrangement-of-details-medical-illustration-vector.jpg" 
                className="img-fluid muscle-img"
                />
                <button>Back</button>
            </div>
            <div className="row d-flex flex-column">
                <img 
                src="https://kulak.kuleuven.be/nl/onderzoek/Onderzoeksdomeinen/m-m/images/muscle-movement.png/@@images/image/preview" 
                className="img-fluid muscle-img"
                />
                <button>Cardio</button>
            </div>
            <div className="row d-flex flex-column">
                <img 
                src="https://kulak.kuleuven.be/nl/onderzoek/Onderzoeksdomeinen/m-m/images/muscle-movement.png/@@images/image/preview" 
                className="img-fluid muscle-img"
                />
                <button>Cardio</button>
            </div>
        </div>
    )
}