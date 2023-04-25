import axios from "axios";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";

export function getRecipesByName(recipeName) {

  let url = `http://localhost:3001/recipes/name?name=${recipeName}`;
  const response = axios.get(url);
  return  response;
}


export const createRecipe = async (recipeData) => {
  console.log("createRecipe");
  console.log(recipeData);
  try {
    const response = await axios.post('http://localhost:3001/recipes', recipeData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};



// import axios from "axios";
// const API_KEY = process.env.API_KEY;

// export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";


// // let urlAPI = `https://api.spoonacular.com/recipes/complexSearch?name=${title}&apiKey=${API_KEY}`;
// let urlLOCAL = `http://localhost:3001/recipes/name?name=pasta`;


// export const getRecipesByName = (title) => async (dispatch) => {
//   try {
//     const response = await axios.get(urlLOCAL);
//     return{
//       type: GET_RECIPES_BY_NAME,
//       payload: response.data,
//     };
//   } catch (error) {
//     // handle error
//   }
// };



















// "http://api.spoonacular.com/recipes/complexSearch?apiKey=codigocc1bea9104e84b14ae1ca6c573a77a11&&number=100&&addRecipeinformation=true&&instructionsRequired=true"

// return async function () {
//    // let json = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?name=${name}&apiKey=${API_KEY}`);
//    // return dispatch({
//    //   type: GET_RECIPES,
//    //   payload: json.data,
//    // });
//    return jsonReturn;
//  };




//ESTE CODIGO FUNCIONA PARA LA API, LA QUE NO FUNCIONA ES LA API

// import axios from "axios";
// const API_KEY = process.env.API_KEY;

// export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";

// export const getRecipesByName = (title) => async (dispatch) => {
//   try {
//     const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?name=${title}&apiKey=${API_KEY}`);
//     dispatch({
//       type: GET_RECIPES_BY_NAME,
//       payload: response.data,
//     });
//   } catch (error) {
//     // handle error
//   }
// };





// MI CODIGO FUNCIONAL CON JSON
// export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";

// export function getRecipesByName() {
//   let recipe = 
//   [
//     {
//       "id":782585,
//       "name":"Cannellini Bean and Asparagus Salad with Mushrooms",
//       "image":"https://spoonacular.com/recipeImages/782585-312x231.jpg",
//       "typeDiets":"vegan"
//     },
//     {
//       "id":716426,
//       "title":"Cauliflower, Brown Rice, and Vegetable Fried Rice",
//       "image":"https://spoonacular.com/recipeImages/716426-312x231.jpg",
//       "typeDiets":"vegan"
//     },
//     {
//       "id":715497,
//       "title":"Berry Banana Breakfast Smoothie",
//       "image":"https://spoonacular.com/recipeImages/715497-312x231.jpg",
//       "typeDiets":"vegan"
//     },
//     {
//       "id":715415,
//       "title":"Red Lentil Soup with Chicken and Turnips",
//       "image":"https://spoonacular.com/recipeImages/715415-312x231.jpg",
//       "typeDiets":"vegetarian"
//     },
//     {
//       "id":716406,
//       "title":"Asparagus and Pea Soup: Real Convenience Food",
//       "image":"https://spoonacular.com/recipeImages/716406-312x231.jpg",
//       "typeDiets":"vegetarian"
//     },
//     {
//       "id":644387,
//       "title":"Garlicky Kale",
//       "image":"https://spoonacular.com/recipeImages/644387-312x231.jpg",
//       "typeDiets":"vegan"
//     },
//     {
//       "id":715446,
//       "title":"Slow Cooker Beef Stew",
//       "image":"https://spoonacular.com/recipeImages/715446-312x231.jpg",
//       "typeDiets":"vegetarian"
//     },
//     {
//       "id":782601,
//       "title":"Red Kidney Bean Jambalaya",
//       "image":"https://spoonacular.com/recipeImages/782601-312x231.jpg",
//       "typeDiets":"vegan"
//     },
//     {
//       "id":795751,
//       "title":"Chicken Fajita Stuffed Bell Pepper",
//       "image":"https://spoonacular.com/recipeImages/795751-312x231.jpg",
//       "typeDiets":"vegetarian"
//     },
//     {
//       "id":766453,
//       "title":"Hummus and Za'atar",
//       "image":"https://spoonacular.com/recipeImages/766453-312x231.jpg",
//       "typeDiets":"vegan"
//     }
//   ];
//   return {
//     type: GET_RECIPES_BY_NAME,
//     payload: recipe,
//   };
// }