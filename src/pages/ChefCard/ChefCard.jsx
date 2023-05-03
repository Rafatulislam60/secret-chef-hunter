import React, { useEffect, useState } from "react";

const ChefCard = () => {
  //   const [chefData, setChefData] = useState([]);
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div>
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
                  <p className="text-lg font-semibold">{chef.years_of_experience}</p>
                  <p className="text-lg font-semibold">{chef.num_recipes}</p>
                  <p className="text-lg font-semibold">{chef.likes}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">
                      View Recipes Button
                    </button>
                  </div>
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
