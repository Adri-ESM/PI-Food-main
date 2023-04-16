const { Router } = require("express");
//const { Recipe, Diet } = require("../db");
//const axios = require("axios");
//const { API_KEY } = process.env;
const { getDetailHandler, getNameHandler, createRecipePostHandler } = require("../handlers/recipesHandler");


const recipesRouter = Router();

recipesRouter.get("/:idRecipe", getDetailHandler);
recipesRouter.get("/name?=", getNameHandler);
recipesRouter.post("/", createRecipePostHandler);

module.exports = recipesRouter;