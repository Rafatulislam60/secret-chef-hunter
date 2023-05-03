import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChefDetails = () => {
    const [ChefDetails, setChefDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/categories/${id}`)
      .then((res) => res.json())
      .then((data) => setChefDetails(data.singleChef));
  }, []);


  return (
    <div>
        <p>name</p>
        {/* {ChefDetails.map((ChefDetail) => (
          <div key={ChefDetail.id}>
            <div>
            <h2 className="card-title text-3xl font-bold">{ChefDetail.name}</h2>
            </div>
          </div>
        ))} */}
    </div>
  )
};

export default ChefDetails;
