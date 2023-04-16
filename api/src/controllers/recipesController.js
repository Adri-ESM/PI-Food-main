const db = require('../db.js');
const Recipe = db.Recipe;

const createRecipePostHandler = async (req, res) => {
  const { name, image, plate_resume, health_score, step_to_step } = req.body;
  console.log(name, image, plate_resume, health_score, step_to_step);
  try {
    const newRecipe = await Recipe.create({
      name,
      image,
      plate_resume,
      health_score,
      step_to_step
    });
    console.log("RECIPE " + newRecipe);
    // Do something with newRecipe, e.g., send a response
    // Remove the response sending code from here
  } catch (error) {
    // Handle the error, e.g., send an error response
    res.status(500).json({ error: error.message + "Controller" });
  }
};

module.exports = {
    createRecipePostHandler,
};









