const dietsController = require('../controllers/dietsController.js');
const Diet = require('../models/Diet');

const getAllDietsHandler = async (req, res) => {
  try {
    const diets = await dietsController.getAllDiets(); // Obtiene todas las dietas desde la base de datos
    res.status(200).json(diets); // Envía las dietas como respuesta al cliente en formato JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las dietas" });
  }
};

module.exports = getAllDietsHandler;
