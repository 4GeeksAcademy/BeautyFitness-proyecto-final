import React from "react";

const FormSignIn = () => {
  return (
    <form>
      <div className="row mb-3">
        <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control form-control-sm" id="email" placeholder="Email" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="password" className="col-sm-2 col-form-label col-form-label-sm">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control form-control-sm" id="password" placeholder="Password" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2">
          <button type="submit" className="btn btn-primary">Sign In</button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2">
          <a href="/forgot-password" className="text-muted">Forgot Password?</a>
        </div>
      </div>
    </form>
  );
};

export default FormSignIn;