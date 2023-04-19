
const recipeController = require('../controllers/recipesController.js');
const Recipe = require('../models/Recipe');


const getRecipeById = async (req, res) => {
    const { idRecipe } = req.params;
    // res.status(200).send("Esto es el recipe "+ idRecipe);
    console.log("Holaaaaaaa BY ID");
    const source = isNaN(idRecipe) ? "bdd" : "api";

  
    try {
      const response = await recipeController.getRecipeById(idRecipe, source);

      res.status(200).json(response);
    } catch {
      // /res.status(404).json({ error: error.message });
      res.status(404).json({ error: "Recipe not found" });
    }
};

const getRecipeByName = async (req, res) => {
  
    const { name } = req.query;
   
    try{
        if(name){
          console.log("Holaaaaaaa"+name);
            const getRecipeByName = await recipeController.getRecipeByName(name);
  
            res.status(200).json(getRecipeByName);
        }else{
            const response = await recipeController.getAllRecipesName()
            res.status(200).json(response);
        }
            } catch(error){
            res.status(401).json({error: error.message});
            }
};


const createRecipePostHandler = async (req, res) => {
  const { name, image, plate_resume, health_score, step_to_step,diets } = req.body;

  try {
    // Call the createRecipePostHandler function from the controller
    await recipeController.createRecipePostHandler(req, res); // Update this line

    // Do something with the response, e.g., send a success response
    res.status(200).send(`Recipe ${name} with ${image} ${plate_resume} ${health_score} ${step_to_step} ${diets} created successfully`);
  } catch (error) {
    // Handle the error and send response to the client
    res.status(500).json({ error: error.message });
    console.log("Hay un error en PostCreate: " + error.message)
  }
};


module.exports = {
    getRecipeById,
    getRecipeByName,
    createRecipePostHandler
};
