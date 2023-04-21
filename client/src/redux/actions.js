
import axios from "axios";
const API_KEY = process.env.API_KEY;

export const GET_RECIPES = "GET_RECIPES";

export function getRecipeByName(name) {
  
  return async function (dispatch) {
    let json = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?name=${name}&apiKey=${API_KEY}`);
    return dispatch({
      type: GET_RECIPES,
      payload: json.data,
    });
  };
}


// "http://api.spoonacular.com/recipes/complexSearch?apiKey=codigocc1bea9104e84b14ae1ca6c573a77a11&&number=100&&addRecipeinformation=true&&instructionsRequired=true"