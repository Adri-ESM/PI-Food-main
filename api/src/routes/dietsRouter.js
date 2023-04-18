const { Router } = require("express");
const getDietsHandler = require("../handlers/dietsHandler");

const dietsRouter = Router();

dietsRouter.get("/", getDietsHandler); // Configura la ruta para GET /diets

module.exports = dietsRouter;



// const { Router } = require("express");
// const getDietsHandler  = require("../handlers/dietsHandler");


// const dietsRouter = Router();

// dietsRouter.use(express.json()); // Middleware para parsear el cuerpo del request en formato JSON
// dietsRouter.get("/", getDietsHandler); // Configura la ruta para GET /diets



// module.exports = dietsRouter;
