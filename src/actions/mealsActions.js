import axios from "../api/axios";
import {
  FETCH_CATEGORY_BEGIN,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_MEALS_BEGIN,
  FETCH_CATEGORY_MEALS_ERROR,
  FETCH_CATEGORY_MEALS_SUCCESS,
  FETCH_CATEGORY_SUCCESS,
  FETCH_GENERATE_MEALS_BEGIN,
  FETCH_GENERATE_MEALS_ERROR,
  FETCH_GENERATE_MEALS_SUCCESS,
  FETCH_SINGLE_MEAL_BEGIN,
  FETCH_SINGLE_MEAL_ERROR,
  FETCH_SINGLE_MEAL_SUCCESS,
} from "./actions";

import {
  CATEGORIES_URL,
  MEAL_CATEGORIES_URL,
  MEAL_RANDOM_URL,
  MEAL_SINGLE_URL,
} from "../utils/constants";

export const startFetchCategories = async (dispatch) => {
  console.log(CATEGORIES_URL);
  try {
    dispatch({ type: FETCH_CATEGORY_BEGIN });
    const response = await axios.get(`${CATEGORIES_URL}`);
    dispatch({
      type: FETCH_CATEGORY_SUCCESS,
      payload: response.data.categories,
    });
  } catch (error) {
    dispatch({ type: FETCH_CATEGORY_ERROR, payload: error.message });
  }
};

export const startFetchSingleMeal = async (dispatch, id) => {
  try {
    dispatch({ type: FETCH_SINGLE_MEAL_BEGIN });
    const response = await axios.get(`${MEAL_SINGLE_URL}${id}`);
    dispatch({ type: FETCH_SINGLE_MEAL_SUCCESS, payload: response.data.meals });
  } catch (error) {
    dispatch({ type: FETCH_SINGLE_MEAL_ERROR, payload: error.message });
  }
};

export const startFetchMealByCategory = async (dispatch, category) => {
  try {
    dispatch({ type: FETCH_CATEGORY_MEALS_BEGIN });
    const response = await axios.get(`${MEAL_CATEGORIES_URL}${category}`);
    dispatch({
      type: FETCH_CATEGORY_MEALS_SUCCESS,
      payload: response.data.meals,
    });
  } catch (error) {
    dispatch({ type: FETCH_CATEGORY_MEALS_ERROR, payload: error.message });
  }
};

export const startFetchRandomMeal = async (dispatch, id) => {
  try {
    dispatch({ type: FETCH_GENERATE_MEALS_BEGIN });
    const response = await axios.get(`${MEAL_RANDOM_URL}${id}`);
    dispatch({
      type: FETCH_GENERATE_MEALS_SUCCESS,
      payload: response.data.meals,
    });
  } catch (error) {
    dispatch({ type: FETCH_GENERATE_MEALS_ERROR, payload: error.message });
  }
};
