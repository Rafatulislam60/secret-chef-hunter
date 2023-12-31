import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Header = () => {
  const { user,logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="navbar bg-indigo-200 flex justify-around py-5 lg:px-8 text-Black-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-indigo-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl lg:text-4xl font-bold"
        >
          Secret Chef Hunter
        </Link>
      </div>
      <div className="hidden lg:flex ">
        <ul className="inline-flex flex-row items-center justify-center lg:text-xl font-semibold">
          <li className="mr-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "default"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "default"
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>

          {user?.email ? (
            <li className="mr-4">
              <button onClick={handleLogOut} className="btn">
                Logout
              </button>
            </li>
          ) : (
            <li className="mr-4">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
                to="/login"
              >
                <button className="btn">Login</button>
              </NavLink>
            </li>
          )}
        </ul>
        {user?.email ? <div className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} />
          </div>
        </div> : ""}
      </div>
    </div>
  );
};

export default Header;
