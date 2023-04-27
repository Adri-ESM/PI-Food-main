
const recipeController = require('../controllers/recipesController.js');
const Recipe = require('../models/Recipe');


const getAllRecipes = async (req, res) => {
  console.log("getAllRecipes Handler: ");
  try{    
    const getAllRecipes = await recipeController.getAllRecipes();
    res.status(200).json(getAllRecipes);
  } catch(error){
    res.status(401).json({error: error.message});
  }
};

const getRecipeById = async (req, res) => {
    const { idRecipe } = req.params;
    const source = isNaN(idRecipe) ? "bdd" : "api";
    try {
      const response = await recipeController.getRecipeById(idRecipe, source);

      res.status(200).json(response);
    } catch {
      res.status(404).json({ error: "Recipe not found" });
    }
};

const getFilterRecipeByDiet = async (req, res) => {
  // console.log("getFilterRecipeByDiet Handler: ");
  const { diet } = req.query;
  try {
    const response = await recipeController.getFilterRecipeByDiet(diet);
    res.status(200).json(response);
  } catch {
    res.status(404).json({ error: "Recipe not found" });
  }
};

const getRecipeByName = async (req, res) => {
    
    const {name} = req.query;
    console.log("getRecipeByName Handler: "+ name);
      try{      
            const getRecipeByName = await recipeController.getRecipeByName(name);
            res.status(200).json(getRecipeByName);
            } catch(error){
            res.status(401).json({error: error.message});
          }
};


// const getRecipeByName = (req, res) => {

//   const {name} = req.query;
//   console.log("getRecipeByName Handler: "+ name);
//   recipeController.getRecipeByName(name)
//       .then(getRecipeByName => {
//           res.status(200).json(getRecipeByName);
//       })
//       .catch(error => {
//           res.status(401).json({error: error.message});
//       });
// };



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
    createRecipePostHandler,
    getAllRecipes,
    getFilterRecipeByDiet,
};
