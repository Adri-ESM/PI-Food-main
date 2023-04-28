import axios from "axios";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";


export function getAllRecipes() {

  let url = `http://localhost:3001/recipes/`;
  const response = axios.get(url);

  return  response;
}

export function getRecipesByName(recipeName) {

  let url = `http://localhost:3001/recipes/name?name=${recipeName}`;
  const response = axios.get(url);
  return  response;
}

//PROMESAS
export const createRecipe = async (recipeData) => {
  try {
    const response = await axios.post('http://localhost:3001/recipes', recipeData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const filterRecipesByDiet = (filterOption) => {
  let url = `http://localhost:3001/recipes/diet?diet=${filterOption}`;
  const response = axios.get(url);
  return  response;
};

export function getAllDiets() {

  let url = `http://localhost:3001/diets/`;
  const response = axios.get(url);

  return  response;
}

export function filterRecipesByHealthScore(filterHealthScore) {
  
  let url = `http://localhost:3001/recipes/score?score=${filterHealthScore}`;
  const response = axios.get(url);
  console.log(response)

  return  response;
}