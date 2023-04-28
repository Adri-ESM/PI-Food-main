const { Router } = require("express");
//const { Recipe, Diet } = require("../db");
//const axios = require("axios");
//const { API_KEY } = process.env;
const { getRecipeById, getRecipeByName, createRecipePostHandler,getAllRecipes, getFilterRecipeByDiet, getRecipesbyHealth, getRecipeDetail } = require("../handlers/recipesHandler");


const recipesRouter = Router();
recipesRouter.get('/', getAllRecipes);

recipesRouter.get('/name', getRecipeByName);

recipesRouter.get('/diet', getFilterRecipeByDiet);

recipesRouter.get('/detail/:id', getRecipeDetail);

recipesRouter.get('/score', getRecipesbyHealth);

recipesRouter.get('/:idRecipe', getRecipeById);



recipesRouter.post('/', createRecipePostHandler);


module.exports = recipesRouter;