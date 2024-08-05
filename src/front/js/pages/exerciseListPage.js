import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ExercisesList } from "../component/exercisesList";

export const ExercisesListPage = () => {
    const { store, actions } = useContext(Context);
    const { bodyPart } = useParams();

    useEffect(() => {
        if (bodyPart) {
            actions.fetchExercisesByBodyPart(bodyPart);
        }
    }, [bodyPart]);

    return (
        <div className="container bg-dark">
            <h2>{bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Exercises</h2>
            <ExercisesList exercises={store.exercises} />
        </div>
    );
};
