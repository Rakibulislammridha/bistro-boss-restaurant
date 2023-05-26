import React from "react";

const FoodCard = ({item}) => {

    const {image, recipe, price, name } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-orange-400 border-b-4 mt-4 bg-slate-200 text-black">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
