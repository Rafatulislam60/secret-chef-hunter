import { faBriefcase, faList, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChefCard = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div className="mb-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Renowned Chef</h1>
      <div className="grid mx-auto gap-3 mt-10 lg:grid-cols-3">
        {chefs.map((chef) => (
          <div key={chef.id}>
            <div>
              <div className="card w-full h-full lg:w-3/4 lg:h-fit lg:mx-12 lg:gap-3 bg-indigo-100 shadow-xl mb-10">
                <figure className="px-10 pt-10">
                  <img
                    src={chef.picture}
                    alt="chef"
                    className="rounded-xl w-full h-48 lg:h-52"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-3xl font-bold">{chef.name}</h2>
                  <p className="text-lg font-semibold"><FontAwesomeIcon icon={faBriefcase} /> <label htmlFor="">Experience:</label> {chef.years_of_experience}</p>
                  <p className="text-lg font-semibold"><FontAwesomeIcon icon={faList} /> <label htmlFor="">Recipes:</label> {chef.num_recipes}</p>
                  <p className="text-lg font-semibold"><FontAwesomeIcon icon={faThumbsUp} /> <label htmlFor="">Like:</label> {chef.likes}</p>
                  <Link to={`${chef.id}`} className="card-actions">
                    <button className="btn btn-primary">
                      View Recipes Button
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefCard;
