import React, { useState } from "react";
import { Link } from "react-router-dom";

const MealList = ({ meals }) => {
  // State to manage favorite meals
  const [favorites, setFavorites] = useState([]);

  // Function to handle adding a meal to favorites
  const addToFavorites = (id) => {
    // Check if the meal is already in favorites
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full font-poppins md:p-0 px-2">
      <h1 className="text-3xl text-[#F85606] bg-white p-2 md:w-1/6 w-1/2 font-medium relative">
        Meals
      </h1>
      <div className="flex flex-col md:flex-wrap gap-10 justify-between items-center h-full w-full md:p-10 p-5 dark:bg-[#2e2e2e] bg-slate-100">
        <ul className="flex flex-col md:flex-wrap  gap-5 justify-around items-start dark:bg-[#151515] bg-white">
          {meals?.map((mealItem) => {
            const {
              idMeal: id,
              strArea: area,
              strCategory: category,
              strMeal: meal,
              strMealThumb: thumbnail,
            } = mealItem;

            return (
              <>
                <Link
                  to={`/meal/${id}`}
                  className="shadow-lg flex flex-col items-center justify-center w-full md:w-64  h-full"
                  key={id}
                >
                  <div className="w-full h-full object-contain relative border border-black dark:border-white overflow-hidden">
                    <img src={thumbnail} alt={meal} className="w-full h-full" />
                  </div>

                  <div className="w-full h-full p-2">
                    <div className="w-full flex flex-col">
                      <div className="area text-sm opacity-60">{area}</div>
                      <div className="meal font-normal text-base whitespace-normal dark:text-white">
                        {meal}
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Favorite button */}
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => addToFavorites(id)}
                >
                  Add to Favorites
                </button>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MealList;
