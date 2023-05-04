import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    if (!/(?=.*[A-Z])/.test(password)) {
      setError(" Need one capital letter");
      return;
    }
    else if(password.length<6){
      setError ("Password need to be at least 6 character")
      return;
    }
    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  console.log(email, password);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <p className="text-error text-lg">{error}</p>
          <div className="form-control" required>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          >
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          >
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control" required>
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="photoURL"
              className="input input-bordered"
            />
          </div>
          <div>
            <p>
              Do you have existing account?
              <NavLink
                to="/login"
                className="label-text-alt link link-hover text-base font-semibold pl-2"
              >
                Login
              </NavLink>
            </p>
          </div>
          <div onClick={handleRegister} className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
