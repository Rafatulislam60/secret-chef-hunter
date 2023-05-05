import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import chef from "../../../assets/chef.png.png";
import ChefCard from "../../ChefCard/ChefCard";
import ExtraSection from "../../ExtraSection/ExtraSection";
import ExtraSectionTwo from "../../ExtraSection/ExtraSectionTwo";

const Home = () => {
  return (
    <>
      <div className="bg-indigo-200 mb-16 flex lg:flex-cols lg:justify-around lg:px-14 mx-auto px-4 py-5">
        <div>
          <h1 className="text-2xl font-bold w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl">
            Fun and Easy <br /> to hire <br />{" "}
            <span className="text-indigo-500">Master Chef</span>
          </h1>
          <p className="my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900">
            Explore thousands of master chef with all the information you need.
            You can find here your future chef. Come find it. Manage chef for
            your cuisine in a easy and fun process.
          </p>
          <Link to="/">
            <button
              type="button"
              className="btn border-none bg-gradient-to-r from-indigo-500 to-indigo-400"
            >
              Get Started
            </button>
          </Link>
        </div>
        <div>
          <img src={chef} alt="" />
        </div>
      </div>
      <div>
        <LazyLoad>
          <ChefCard></ChefCard>
        </LazyLoad>
      </div>
      <div>
        <LazyLoad>
          <ExtraSection></ExtraSection>
        </LazyLoad>
      </div>
      <div>
        <LazyLoad>
          <ExtraSectionTwo></ExtraSectionTwo>
        </LazyLoad>
      </div>
    </>
  );
};

export default Home;
