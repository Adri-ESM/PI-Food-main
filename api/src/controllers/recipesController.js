const db = require('../db.js');
const Recipe = db.Recipe;
const Diet = db.Diet;
const axios = require('axios');
const dietsController = require('./dietsController.js');
const API_KEY = process.env.API_KEY;
const { Op } = require('sequelize');



const createRecipePostHandler = async (req, res) => {
  const { name, image, plate_resume, health_score, step_to_step, diets } = req.body;
  console.log("createRecipePostHandler: "+name, image, plate_resume, health_score, step_to_step, diets);
  try {
    const newRecipe = await Recipe.create({
      name: name.toLowerCase(),
      image,
      plate_resume,
      health_score,
      step_to_step
    });
    // Add diets to the recipe
    let dietsToAdd;
    if (diets && diets.length > 0) {
      diets.forEach(async diet => {
        const existingDiet = await Diet.findOne({ where: { name: diet } });
        await newRecipe.addDiets(existingDiet);
        
      });
    }
  } catch (error) {
   console.log({ error: error.message + "Controller" });
  }
};


//------------GET RECIPES BY ID------------
const getRecipeById = async (idRecipe, source) => {
  const query = `https://api.spoonacular.com/recipes/complexSearch?id=${idRecipe}&apiKey=${API_KEY}`;
  console.log("entro a getRecipeById ");

  let recipe;
  if (source === "api") {
    await (axios.get(query))
    .then((response) => {
      recipe = response.data
    })
  } else {
    
    recipe = await Recipe.findByPk(idRecipe.toLowerCase())
  }
  return recipe;
}

const getRecipeByName = async (name) => {

  let infoApi;
  let steps= '';
  let recipesDb = [];
  let recipes;
  let newRecipe ;

  console.log("entro a getAllRecipes Controller")
  try {
    recipes = await Recipe.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
      include: [{
        model: Diet,
        attributes: ['name'],
        through: { attributes: [] },
      }]
    });
  
    recipes.forEach((recipe) => {
      const dietNames = recipe.Diets ? recipe.Diets.map(diet => diet.name) : [];
      newRecipe = {
        name: recipe.name.toLowerCase(),
        image: recipe.image,
        plate_resume: recipe.plate_resume,
        health_score: recipe.health_score,
        step_to_step: recipe.step_to_step,
        diets: [{name: dietNames}]
      };
      recipesDb.push(newRecipe);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
  try{
    if(recipesDb.length < 100){
      console.log("falta gente");
      const query = `https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${API_KEY}&addRecipeInformation=true&number=10`;
      infoApi = (await axios.get(query));
      for (const recipe of infoApi.data.results) {
        recipe.analyzedInstructions.forEach(intruction =>{
          intruction.steps.forEach(step =>{
            steps = steps + step.step;
          });
        });
        const newRecipe = {
          name: recipe.title.toLowerCase(),
          image: recipe.image,
          plate_resume: recipe.summary.substring(0, 254),
          health_score: recipe.healthScore,
          step_to_step: steps.substring(0, 254),
          diets: []
        };
        recipesDb.push(newRecipe);
        if (recipe.diets && recipe.diets.length > 0) {
          const diets = recipe.diets.map((diet) => ({ name: diet }));
          newRecipe.diets = diets;
        }
      }
    }
  }catch{
    // console.error(err);
  }
  return recipesDb;
};



const getAllRecipes = async () => {
  let infoApi;
  let steps= '';
  let recipesDb = [];
  let recipes;
  let newRecipe ;
  //console.log("entro a getAllRecipes Controller")
  try {
    recipes = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ['name'],
        through: { attributes: '' },
      },
    });
    recipes.forEach((recipe) => {
      const dietNames = recipe.Diets.map(diet => diet.name);
      newRecipe = {
        name: recipe.name.toLowerCase(),
        image: recipe.image,
        plate_resume: recipe.plate_resume,
        health_score: recipe.health_score,
        step_to_step: recipe.step_to_step,
        diets: [{name: dietNames}]
      };
      recipesDb.push(newRecipe);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
  try{
      const query = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`;
      infoApi = (await axios.get(query));
      for (const recipe of infoApi.data.results) {
        recipe.analyzedInstructions.forEach(intruction =>{
          intruction.steps.forEach(step =>{
            steps = steps + step.step;
          });
        });
        newRecipe = {
          name: recipe.title.toLowerCase(),
          image: recipe.image,
          plate_resume: recipe.summary.substring(0, 254),
          health_score: recipe.healthScore,
          step_to_step: steps.substring(0, 254),
          diets: []
        };
        // console.log(newRecipe);
        recipesDb.push(newRecipe);
        if (recipe.diets && recipe.diets.length > 0) {
          const diets = recipe.diets.map((diet) => ({ name: diet }));
          
          newRecipe.diets = diets;
          // for (const diet of diets) {

          // }
        }
      }
  }catch{
    // console.error(err);
  }
  // console.log(recipesDb.length);
  return recipesDb;
};



const getFilterRecipeByDiet = async (diet) => {
  console.log("DIETA: "+diet)
  let infoApi;
  let steps= '';
  let recipesDb = [];
  let recipes;
  let newRecipe ;

  console.log("entro a getFilterRecipeByDiet Controller")
  try {
    recipes = await Recipe.findAll({
      include: [
        {
          model: Diet,
          where: { name: diet },
          attributes: [],
          through: { attributes: [] },
        },
      ],
    });
  
    recipes.forEach((recipe) => {
      const dietNames = [diet]; // use the filter value instead of recipe.Diets
      console.log("DIETA: "+dietNames);
      newRecipe = {
        name: recipe.name.toLowerCase(),
        image: recipe.image,
        plate_resume: recipe.plate_resume,
        health_score: recipe.health_score,
        step_to_step: recipe.step_to_step,
        diets: dietNames.map(name => ({ name }))
      };
      recipesDb.push(newRecipe);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
  try{
    if(recipesDb.length < 5){
      console.log("falta gente");
      const query = `https://api.spoonacular.com/recipes/complexSearch?query=${diet}&apiKey=${API_KEY}&addRecipeInformation=true&number=100`;
      infoApi = (await axios.get(query));
      for (const recipe of infoApi.data.results) {
        recipe.analyzedInstructions.forEach(intruction =>{
          intruction.steps.forEach(step =>{
            steps = steps + step.step;
          });
        });
        const newRecipe = {
          name: recipe.title.toLowerCase(),
          image: recipe.image,
          plate_resume: recipe.summary.substring(0, 254),
          health_score: recipe.healthScore,
          step_to_step: steps.substring(0, 254),
          diets: []
        };
        recipesDb.push(newRecipe);
        if (recipe.diets && recipe.diets.length > 0) {
          const diets = recipe.diets.map((diet) => ({ name: diet }));
          newRecipe.diets = diets;
        }
      }
    }
  }catch{
    // console.error(err);
  }
  return recipesDb;
};






const getRecipesbyHealth = async (healthScore) => {
  let infoApi;
  let steps= '';
  let recipesDb = [];
  let recipes;
  let newRecipe ;
  
  try {
    recipes = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ['name'],
        through: { attributes: '' },
      },
    });
 
    recipes.forEach((recipe) => {
      const dietNames = recipe.Diets.map(diet => diet.name);

      if(recipe.health_score <= healthScore){
        newRecipe = {
          name: recipe.name.toLowerCase(),
          image: recipe.image,
          plate_resume: recipe.plate_resume,
          health_score: recipe.health_score,
          step_to_step: recipe.step_to_step,
          diets: [{name: dietNames}]
        };
        recipesDb.push(newRecipe);
      }
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
  try{
      const query = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`;
      infoApi = (await axios.get(query));
      for (const recipe of infoApi.data.results) {
        recipe.analyzedInstructions.forEach(intruction =>{
          intruction.steps.forEach(step =>{
            steps = steps + step.step;
          });
        });
        if(recipe.healthScore <= healthScore){
          newRecipe = {
            name: recipe.title.toLowerCase(),
            image: recipe.image,
            plate_resume: recipe.summary.substring(0, 254),
            health_score: recipe.healthScore,
            step_to_step: steps.substring(0, 254),
            diets: []
          };
          // console.log(newRecipe);
          recipesDb.push(newRecipe);
        }

        if (recipe.diets && recipe.diets.length > 0) {
          const diets = recipe.diets.map((diet) => ({ name: diet }));
          
          newRecipe.diets = diets;
          // for (const diet of diets) {

          // }
        }
      }
  }catch{
    // console.error(err);
  }
  console.log("entro a getRecipesbyHealth Controller" + recipesDb.length)
  return recipesDb;
};



module.exports = {
    createRecipePostHandler,
    getRecipeById,
    getAllRecipes,
    getRecipeByName,
    getFilterRecipeByDiet,
    getRecipesbyHealth
};




