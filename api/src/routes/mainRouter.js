const { Router } = require("express");

//maneja todas las solicitudes
const recipesRouter = require("./recipesRouter.js");
const dietsRouter = require("./dietsRouter.js");

const mainRouter = Router();
mainRouter.use("/recipes", recipesRouter);
mainRouter.use("/diets", dietsRouter);


module.exports = mainRouter;


