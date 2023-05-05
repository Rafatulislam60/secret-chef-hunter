import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // const form = event.target;
    // const email = event.target.email.value;
    // const password = event.target.password.value


    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          Navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
  }
  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setError("Provide 6 digit password")
    }
    else{
      setError("");
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} action="">
          <div className="card-body mb-5">
            {error && <span className="text-error">{error}</span>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                onChange={handleEmail}
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
                name="password"
                onChange={handlePassword}
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
              <button  className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </form>
        <div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
