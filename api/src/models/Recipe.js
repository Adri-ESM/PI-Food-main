const Sequelize = require('sequelize');

const Recipe = (sequelize) => {
  const RecipeModel = sequelize.define('Recipe', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    plateResume: {
      type: Sequelize.STRING,
    },
    healthScore: {
      type: Sequelize.INTEGER,
    },
    stepToStep: {
      type: Sequelize.STRING,
    },
  },
  {timestamps:false}
  );

  return RecipeModel;
};

module.exports = Recipe;

