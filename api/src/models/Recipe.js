const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    }
  }, {
    tableName: 'Recipes' // specify the table name explicitly
  });

  return Recipe;
};