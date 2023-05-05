import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import app from "../../firebase/firebase.config";

const SocialLogin = () => {
  const [user, setUser] = useState({});
  const Navigate = useNavigate();
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, GithubProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline btn-secondary gap-2 mx-8 mb-3"
      >
        <FaGoogle />
        Login With Google
      </button>
      <button
        onClick={handleGithubLogin}
        className="btn btn-outline btn-secondary gap-2 mx-8 mb-8"
      >
        <FaGithub />
        Login With GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
