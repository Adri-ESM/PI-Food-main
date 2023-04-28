const db = require('../db.js');
const Diet = db.Diet;
const axios = require('axios');
const API_KEY = process.env.API_KEY;
//const infoCleaner = require('../utils/index.js');


//------------GET DIETS FROM API AND SAVE IN DB------------
// const getAllDiets = async () => {
//   let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=2`;
//   let diets = await Diet.findAll();
//   if (!diets.length) {
//     try{
//       const dietsFromApi = await axios.get(url);
//       // console.log( dietsFromApi.data.results);
//       dietsFromApi.data.results.forEach(recipe => {
//         diets = recipe.diets.map((diet) => ({ name: diet }));
//       });
//       await Diet.bulkCreate(diets);
//       diets = await Diet.findAll();
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   return diets;
// }

const getAllDiets = async () => {
  let diets = [];
  let infoApi;
  try {
    const query = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=40`;
    infoApi = await axios.get(query);
    infoApi.data.results.forEach(recipe => {
      if (recipe.diets.length > 0) {
        recipe.diets.forEach(diet => {
          if (!diets.includes(diet)) {
            diets.push(diet)
          }
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
  diets.forEach(async diet => {
    const existingDiet = await Diet.findOne({ where: { name: diet } });
    if (!existingDiet) {
      await Diet.create({ name: diet });
    }
  });
  let dietsBD = await Diet.findAll();
  if (dietsBD.length === 0) {
    dietsBD = await Diet.findAll();
  }
  return dietsBD;
};


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



