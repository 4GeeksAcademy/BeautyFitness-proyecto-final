import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/exercices.css";
import back from "../../img/back.png";
import cardio from "../../img/cardio.png";
import chest from "../../img/chest.png";
import lowerArms from "../../img/lowerArms.png";
import lowerLegs from "../../img/lowerLegs.png";
import neck from "../../img/neck.png";
import shoulders from "../../img/shoulders.png";
import upperArms from "../../img/upperArms.png";
import upperLegs from "../../img/upperLegs.png";
import waist from "../../img/waist.png";

export const Exercices = () => {
    const navigate = useNavigate();

    const handleBodyPartClick = (bodyPart) => {
        navigate(`/exercises-list/${bodyPart}`);
    };

    const bodyParts = [
        { src: back, name: "back" },
        { src: cardio, name: "cardio" },
        { src: chest, name: "chest" },
        { src: lowerArms, name: "lower arms" },
        { src: lowerLegs, name: "lower legs" },
        { src: neck, name: "neck" },
        { src: shoulders, name: "shoulders" },
        { src: upperArms, name: "upper arms" },
        { src: upperLegs, name: "upper legs" },
        { src: waist, name: "waist" }
    ];

    return (
        <div className="container bg-dark">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 d-flex justify-content-center align-items-center">
                {bodyParts.map((part, index) => (
                    <div key={index} className="col d-flex flex-column my-2" onClick={() => handleBodyPartClick(part.name)}>
                        <img 
                            src={part.src} 
                            className="img-fluid muscle-img cursor"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
