const { Router } = require("express");
const getAllDietsHandler = require("../handlers/dietsHandler");

const dietsRouter = Router();

dietsRouter.get("/", getAllDietsHandler); // Configura la ruta para GET /diets

module.exports = dietsRouter;