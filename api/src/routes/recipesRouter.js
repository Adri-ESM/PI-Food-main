const { Router } = require("express");
//const { Recipe, Diet } = require("../db");
//const axios = require("axios");
//const { API_KEY } = process.env;
const { getRecipeById, getRecipeByName, createRecipePostHandler } = require("../handlers/recipesHandler");


const recipesRouter = Router();
recipesRouter.get('/name', getRecipeByName);

recipesRouter.get('/:idRecipe', getRecipeById);

recipesRouter.post('/', createRecipePostHandler);


module.exports = recipesRouter;