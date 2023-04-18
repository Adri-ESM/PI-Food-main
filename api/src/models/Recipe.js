const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    id: {
      type:DataTypes.UUID, //h34jHk-23rfT-233LLi-sjkel(por ejemplo)
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    plate_resume: {
      type: DataTypes.STRING,
      allowNull: false
    },
    health_score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    step_to_step: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    //tableName: 'Recipes' // specify the table name explicitly
  });

  //   Recipe.belongsToMany(sequelize.models.Diet, { through: sequelize.models.RecipeDiet });
  // sequelize.models.Diet.belongsToMany(Recipe, { through: sequelize.models.RecipeDiet });

  return Recipe;
};



