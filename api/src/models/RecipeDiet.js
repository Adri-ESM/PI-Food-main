const Sequelize = require('sequelize');

const RecipeDiet = (sequelize) => {
  const RecipeDietModel = sequelize.define('RecipeDiet', {},
  {timestamps:false}
  );

  return RecipeDietModel;
};

module.exports = RecipeDiet;
