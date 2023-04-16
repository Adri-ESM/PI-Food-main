const { Router } = require("express");
//const { Recipe, Diet } = require("../db");
//const axios = require("axios");
//const { API_KEY } = process.env;
const getDietsHandler  = require("../handlers/dietsHandler");


const dietsRouter = Router();

dietsRouter.get("/", getDietsHandler);


module.exports = dietsRouter;
