import {
  faBriefcase,
  faList,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipes from "./Recipes";

const ChefDetails = () => {
  const [ChefDetails, setChefDetails] = useState([]);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetch(`https://secret-chef-hunter-server-rafatulislam60.vercel.app/categories/${id}`)
      .then((res) => res.json())
      .then((data) => setChefDetails(data.singleChef));
  }, []);

  const {
    picture,
    name,
    years_of_experience,
    bio,
    num_recipes,
    likes,
    recipes,
  } = ChefDetails;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="mx-auto text-center">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6 text-xl">{bio}</p>
            <hr className="mb-3 h-1 bg-base-900" />
            <p className="text-lg font-semibold">
              <FontAwesomeIcon icon={faBriefcase} />{" "}
              <label htmlFor="">Experience:</label> {years_of_experience}
            </p>
            <p className="text-lg font-semibold">
              <FontAwesomeIcon icon={faList} />{" "}
              <label htmlFor="">Recipes:</label> {num_recipes}
            </p>
            <p className="text-lg font-semibold">
              <FontAwesomeIcon icon={faThumbsUp} />{" "}
              <label htmlFor="">Like:</label> {likes}
            </p>
          </div>
        </div>
      </div>

      <div className="grid bg-base-200 lg:grid-cols-3 my-10 lg:mx-10">
        {ChefDetails?.recipes?.map((ChefDetail) => (
          <Recipes key={ChefDetail.id} ChefDetail={ChefDetail}></Recipes>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
