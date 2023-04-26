const db = require('../db.js');
const Diet = db.Diet;
const axios = require('axios');
const API_KEY = process.env.API_KEY;
//const infoCleaner = require('../utils/index.js');


//------------GET DIETS FROM API AND SAVE IN DB------------
const getAllDiets = async () => {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`;
  let diets = await Diet.findAll();
  if (!diets.length) {
    try{
      const dietsFromApi = await axios.get(url);
      // console.log( dietsFromApi.data.results);
      dietsFromApi.data.results.forEach(recipe => {
        diets = recipe.diets.map((diet) => ({ name: diet }));
      });
      await Diet.bulkCreate(diets);
      diets = await Diet.findAll();
    } catch (error) {
      console.error(error);
    }
  }
  return diets;
}

const createDiet = async (name) => {

  try {
    const newDiet = await Diet.create({
      name: name,
      created: true
    });
    return newDiet;
  } catch (error) {
    return null;
  }
};

const saveDiesToDb = async (diets) => {
  await Diet.bulkCreate(diets);
}

module.exports = {
  getAllDiets,
  createDiet
};



