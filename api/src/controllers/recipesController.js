const db = require('../db.js');
const Recipe = db.Recipe;
const Diet = db.Diet;
const axios = require('axios');
const API_KEY = process.env.API_KEY;
//const infoCleaner = require('../utils/index.js');

//------------CREATE POST RECIPES------------
const createRecipePostHandler = async (req, res) => {
  const { name, image, plate_resume, health_score, step_to_step } = req.body;
  console.log(name, image, plate_resume, health_score, step_to_step);
  try {
    const newRecipe = await Recipe.create({
      name: name.toLowerCase(), //convertir a minúsculas
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


//------------GET ALL RECIPES BY NAME------------
const getAllRecipesName = async (name) => {
  console.log("entro a getAllRecipesName ")
  const query = `https://api.spoonacular.com/recipes/complexSearch?name=${name}&apiKey=${API_KEY}`;

  const recipesDB = await Recipe.findAll();
  
  const infoApi = (await axios.get(query)).data;
  //const recipesApi = infoCleaner(infoApi);

  return [...recipesDB, ...infoApi]; //junta ambos arrays en un solo array
};


//------------GET ONE RECIPE BY NAME------------
const getRecipeByName = async (name) => {
  console.log("entro a getRecipeByName ")
  const query = `https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${API_KEY}`;
  
  let infoApi;

  await axios.get(query)
  .then(response => {
      // Handle response
      console.log(response.data)
      infoApi = response.data;
  })
  .catch(err => {
      // Handle errors
      console.error(err);
  });

   // Check if infoApi is an array
  //  if (!Array.isArray(infoApi)) {
  //   throw new Error("infoApi is not an array");
  // }

    // Convierte infoApi en un arreglo
    //const infoApiArray = Array.from(infoApi);

    //const recipesApi = infoCleaner(infoApi);

    //const recipeFiltered = infoApi.filter((recipe) => recipe.name === name);

  const recipesDb = await Recipe.findAll({where: {name: name}});
  // return (infoApi+recipesDb);
  return {...infoApi, ...recipesDb};
};


//------------GET DIETS FROM API AND SAVE IN DB------------
const getDietsFromApi = async () => {
  const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey==${API_KEY}`);
  return response.data;
}

const saveDiesToDb = async (diets) => {
  await Diet.bulkCreate(diets);
}

module.exports = {
    createRecipePostHandler,
    getRecipeById,
    getAllRecipesName,
    getRecipeByName,
    getDietsFromApi,
    saveDiesToDb
};





//https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
 //const recipe = source === "api" ? await (axios.get(query)).data : await Recipe.findByPk(idRecipe);



