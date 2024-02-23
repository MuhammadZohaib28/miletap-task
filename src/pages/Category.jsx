import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useMealContext } from "../context/mealContext";
import { startFetchMealByCategory } from "../actions/mealsActions";
import MealList from "../components/Meal/MealList";

const Category = () => {
  const { name } = useParams();
  const { categoryMeals, dispatch, categories } = useMealContext();
  let catDescription = "";

  if (categories) {
    categories.forEach((category) => {
      if (category?.strCategory === name)
        catDescription = category?.strCategoryDescription;
    });
  }

  useEffect(() => {
    startFetchMealByCategory(dispatch, name);
  }, [name, dispatch]);

  return (
    <main className="font-poppins  bg-orange-100 flex flex-col justify-between items-center p-6 pl-2 pr-2 md:pl-28 md:pr-28  dark:bg-[#0F0F0F]">
      <div className="container m-1  bg-white dark:bg-[#141414] rounded-sm">
        <div className="cat-description px-4 py-4">
          <h2 className="text-yellow-700 font-bold text-3xl fw-8">{name}</h2>
          <p className="dark:text-white">{catDescription}</p>
        </div>
      </div>
      {categoryMeals?.length ? <MealList meals={categoryMeals} /> : null}
    </main>
  );
};

export default Category;
