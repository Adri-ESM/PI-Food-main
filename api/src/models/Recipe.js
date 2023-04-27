const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    id: {
      type:DataTypes.UUID, //h34jHk-23rfT-233LLi-sjkel(por ejemplo) Un identificador único universal (UUID) es un número de 128 bits usado para identificar información en sistemas de computación. El término globalmente único se usa generalmente para describir la identidad de información usada en aplicaciones distribuidas.
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4 //Genera un UUID aleatorio. Cuando se llama sin argumentos, UUIDV4() devuelve un UUID aleatorio. Cuando se llama con el argumento string, el UUID se genera a partir del espacio de nombres UUID especificado y el nombre.
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



