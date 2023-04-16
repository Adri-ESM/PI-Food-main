
const recipeController = require('../controllers/recipesController.js');
const Recipe = require('../models/Recipe');

const getDetailHandler = (req, res) => {
    const { idRecipe } = req.params;
    res.status(200).send(`Este es el getDetailHandler ${idRecipe}`);
};

const getNameHandler = (req, res) => {
    const { name } = req.query;
    res.status(200).send(`este es el getNameHandler${name}`);
};

const createRecipePostHandler = async (req, res) => {
  const { name, image, plate_resume, health_score, step_to_step } = req.body;

  try {
    // Call the createRecipePostHandler function from the controller
    await recipeController.createRecipePostHandler(req, res); // Update this line

    // Do something with the response, e.g., send a success response
    res.status(200).send(`Recipe ${name} created successfully`);
  } catch (error) {
    // Handle the error and send response to the client
    res.status(500).json({ error: error.message });
  }
};




module.exports = {
    getDetailHandler,
    getNameHandler,
    createRecipePostHandler,
};
