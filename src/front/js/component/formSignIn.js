import React from "react";

const FormSignIn = () => {
    return (
        <FormSignIn>
         
            <div className="row mb-3">
                <label htmlFor="surname" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="Email" placeholder="Email" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-sm">Password</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control form-control-sm" id="Password" placeholder="Password" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <button type="submit" className="btn btn-primary">Sing In</button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <a href="/forgot-password" className="text-muted">Forgot Password?</a>
                    <button type="submit" className="btn btn-primary">Forgot Password?</button>
                </div> 
            </div>
        </FormSignIn>
    );
};

export default FormSignIn;