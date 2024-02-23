import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MealSingle from "../components/Meal/MealSingle";
import { startFetchSingleMeal } from "../actions/mealsActions";
import { useMealContext } from "../context/mealContext";

const MealDetails = () => {
  const { id } = useParams();
  const { dispatch, meal, mealLoading } = useMealContext();

  useEffect(() => {
    startFetchSingleMeal(dispatch, id);
  }, [id]);

  let ingredientsArr = [],
    measuresArr = [],
    singleMeal = {};
  if (meal && meal?.length > 0) {
    for (let props in meal[0]) {
      if (props.includes("strIngredient")) {
        if (meal[0][props]) ingredientsArr.push(meal[0][props]);
      }

      if (props.includes("strMeasure")) {
        if (meal[0][props]) {
          if (meal[0][props].length > 1) {
            measuresArr.push(meal[0][props]);
          }
        }
      }
    }

    singleMeal = {
      id: meal[0]?.idMeal,
      title: meal[0]?.strMeal,
      category: meal[0]?.strCategory,
      area: meal[0]?.strArea,
      thumbnail: meal[0]?.strMealThumb,
      source: meal[0]?.strSource,
      tags: meal[0]?.strTags,
      youtube: meal[0]?.strYoutube,
      ingredients: ingredientsArr,
    };
  }

  return (
    <main className="main-content bg-red-400">
      {mealLoading ? <h1>Loading ....</h1> : <MealSingle meal={singleMeal} />}
    </main>
  );
};

export default MealDetails;
