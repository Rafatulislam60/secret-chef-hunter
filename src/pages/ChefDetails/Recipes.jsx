import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = ({ ChefDetail }) => {
  // console.log(ChefDetail);

  const handleFavorite = () => {
    toast("You have successfully added in the favorite.", {position: "top-center"});
  };

  const { name, rating, ingredients, cooking_method } = ChefDetail;
  return (
    <div className="card w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title  ">
          <span className="text-indigo-700 font-bold text-2xl">
            Recipe Name:
          </span>{" "}
          {name}
        </h2>
        <div>
          {" "}
          <span className="text-xl font-bold text-indigo-700">
            Ingredients:
          </span>
          <ul className="text-lg font-semibold">
            <li>1. {ingredients[0]}</li>
            <li>2. {ingredients[1]}</li>
            <li>3. {ingredients[2]}</li>
            <li>4. {ingredients[3]}</li>
            <li>5. {ingredients[4]}</li>
          </ul>{" "}
        </div>
        <p className="text-lg font-semibold">
          <span className="text-xl font-bold text-indigo-700">
            Cooking Methods:
          </span>{" "}
          {cooking_method}
        </p>
        <p className="text-lg font-semibold">
          <span className="text-xl font-bold text-indigo-700">Rating:</span>{" "}
          {rating}
        </p>
        <div className="card-actions justify-end">
          <button onClick={handleFavorite} className="btn btn-primary">
            Favorite
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Recipes;
