
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


const createRecipePostHandler = async (req, res) => {
  const { name, image, plate_resume, health_score, step_to_step,diets } = req.body;
  console.log("EN EL HANDLER: "+diets);
  try {

    const recipe = await recipeController.createRecipePostHandler(req, res); // Update this line
    if(recipe !== "The recipe exists"){
      res.status(200).send(`Recipe ${name} with ${image} ${plate_resume} ${health_score} ${step_to_step} ${diets} created successfully`);
    }else{
      res.status(200).send("The recipe exists");
    }
    
  } catch (error) {

    res.status(500).json({ error: error.message });
    console.log("Hay un error en PostCreate: " + error.message)
  }
};


const getRecipesbyHealth = async (req, res) => {
  
  const { score } = req.query;
  try{    
    const recipes = await recipeController.getRecipesbyHealth(score);
    res.status(200).json(recipes);
  } catch(error){
    res.status(401).json({error: error.message});
  }
};


module.exports = {
    getRecipeById,
    getRecipeByName,
    createRecipePostHandler,
    getAllRecipes,
    getFilterRecipeByDiet,
    getRecipesbyHealth,
    getRecipeDetail
};
