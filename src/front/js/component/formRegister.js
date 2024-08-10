import React from "react";

const FormRegister = () => {
    return (
        <form class="formRegister">
            <div className="row mb-3 mt-5">
                <label htmlFor="name" className="col-sm-2 col-form-label col-form-label-sm"></label>
                <div className="col-sm-5">
                    <input type="text" className="form-control form-control-sm" id="name" placeholder="Name" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="surname" className="col-sm-2 col-form-label col-form-label-sm"></label>
                <div className="col-sm-5">
                    <input type="text" className="form-control form-control-sm" id="surname" placeholder="Surname" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-sm"></label>
                <div className="col-sm-5">
                    <input type="email" className="form-control form-control-sm" id="email" placeholder="Email" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="username" className="col-sm-2 col-form-label col-form-label-sm"></label>
                <div className="col-sm-5">
                    <input type="text" className="form-control form-control-sm" id="username" placeholder="Username" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-5 offset-sm-2 center">
                 <button type="submit" class="btn btn-success">Register</button>
                </div>
            </div>
        </form>
    );
};

export default FormRegister;
