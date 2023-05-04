import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category"

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          Navigate(from, {replace: true})
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

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
              <span className="label-password">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            <div className=" flex inline-flex">
              <p>
                Don't you have existing account?
                <NavLink
                  to="/register"
                  className="label-text-alt link link-hover text-base font-semibold  pl-2"
                >
                  Register
                </NavLink>
              </p>
            </div>
          </div>
          <div className="form-control mt-6">
            <button onClick={handleLogin} className="btn btn-primary">
              Login
            </button>
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
