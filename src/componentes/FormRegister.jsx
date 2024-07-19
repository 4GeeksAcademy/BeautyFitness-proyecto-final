import React from "react";

const Text = () => {
    return (
        <form>
            <div className="row mb-3">
                <label htmlFor="name" className="col-sm-2 col-form-label col-form-label-sm">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="name" placeholder="Name" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="surname" className="col-sm-2 col-form-label col-form-label-sm">Surname</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="surname" placeholder="Surname" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control form-control-sm" id="email" placeholder="Email" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="username" className="col-sm-2 col-form-label col-form-label-sm">Username</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="username" placeholder="Username" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </div>
        </form>
    );
};

export default Text;
