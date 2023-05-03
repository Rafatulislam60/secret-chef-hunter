import React from "react";
import { NavLink } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body mb-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <div className=" flex inline-flex">
            <p>Don't you have existing account?<NavLink to="/register" className="label-text-alt link link-hover text-base font-semibold  pl-2">
              Register
            </NavLink></p>
          </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
        <div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
