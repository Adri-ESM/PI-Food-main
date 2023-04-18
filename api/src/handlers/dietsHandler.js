const { Diet } = require("../db"); // Importa el modelo de Sequelize para Diet

const getDietsHandler = async (req, res) => {
  try {
    const diets = await Diet.findAll(); // Obtiene todas las dietas desde la base de datos
    res.status(200).json(diets); // Envía las dietas como respuesta al cliente en formato JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las dietas" });
  }
};

module.exports = getDietsHandler;



// const { Diet } = require('../db.js');


// const getDietsHandler = async (req, res) => {
//     try {
//       const { dietsApi } = req.body; // Obtén la  API de las dietas desde el cuerpo del request
//       const diets = await getDietsFromApi(dietsApi); // Utiliza la función getDietsFromApi para obtener las dietas desde laApi
//       await saveDietsToDb(diets); // Utiliza la función saveDietsToDb para guardar las dietas en la base de datos
//       const dietsFromDb = await Diet.findAll(); // Obtiene todas las dietas desde la base de datos
//       res.status(200).json(dietsFromDb); // Envía las dietas desde la base de datos como respuesta al cliente en formato JSON
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Error al obtener las dietas" });
//     }
//   };
// module.exports = getDietsHandler;
