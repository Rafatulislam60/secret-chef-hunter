import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex flex-col">
      <button className="btn btn-outline btn-secondary gap-2 mx-8 mb-3">
        <FaGoogle />
        Login With Google
      </button>
      <button className="btn btn-outline btn-secondary gap-2 mx-8 mb-8">
        <FaGithub />
        Login With GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
