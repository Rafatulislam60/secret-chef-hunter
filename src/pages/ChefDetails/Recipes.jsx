
const Recipes = ({ ChefDetail }) => {
    console.log(ChefDetail);
  const { name, rating, ingredients, cooking_method } = ChefDetail;
  return (
    <div className="card w-96 shadow-xl">
      {/* <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Favorite</button>
        </div>
      </div> */}
    </div>
  );
};

export default Recipes;
