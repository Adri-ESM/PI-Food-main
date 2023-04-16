const { Router } = require("express");

//const { Recipe, Diet } = require("../db");
//const axios = require("axios");
//const { API_KEY } = process.env;
const recipesRouter = require("./recipesRouter.js");
const dietsRouter = require("./dietsRouter.js");

const mainRouter = Router();
mainRouter.use("/recipes", recipesRouter);
mainRouter.use("/diets", dietsRouter);


module.exports = mainRouter;


