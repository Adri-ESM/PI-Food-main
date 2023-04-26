import axios from "axios";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
const API_URL = process.env.API_URL;

export function getAllRecipes() {

  let url = `${API_URL}/recipes/`;
  const response = axios.get(url);

  return  response;
}

export function getRecipesByName(recipeName) {

  let url = `${API_URL}/recipes/name?name=${recipeName}`;
  const response = axios.get(url);
  return  response;
}


export const createRecipe = async (recipeData) => {
  try {
    const response = await axios.post(`${API_URL}/recipes`, recipeData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const filterRecipesByDiet = (filterOption) => {
  let url = `${API_URL}/recipes/diet?diet=${filterOption}`;
  const response = axios.get(url);
  return  response;
};
