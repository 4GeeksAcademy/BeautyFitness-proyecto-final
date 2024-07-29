import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const UpdateProfile = () => {
    const { store, actions } = useContext(Context);
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (store.user) {
            setBirthDate(store.user.birth_date || "");
            setGender(store.user.gender || "");
            setWeight(store.user.weight || "");
            setHeight(store.user.height || "");
        }
    }, [store.user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await actions.updateUser({
            birth_date: birthDate,
            gender,
            weight,
            height
        });
        if (success) {
            navigate("/");
        }
    };

    return (
        <div className="text-center my-5">
            <form className="my-5 d-flex flex-column justify-content-center align-items-center bg-dark text-light" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="birth_date" className="form-label">Birth Date</label>
                    <input type="date" className="form-control" id="birth_date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select id="gender" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="none">None</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="weight" className="form-label">Weight</label>
                    <input type="number" step="0.1" className="form-control" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="height" className="form-label">Height</label>
                    <input type="number" step="0.1" className="form-control" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};
