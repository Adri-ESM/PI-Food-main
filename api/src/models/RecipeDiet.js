const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RecipeDiet = sequelize.define('RecipeDiet', {
  }, {
    tableName: 'RecipeDiets' // specify the table name explicitly
  });

  return RecipeDiet;
};
