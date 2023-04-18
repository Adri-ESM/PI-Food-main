const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RecipeDiet = sequelize.define('RecipeDiet', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true
    // }
  }, {
    tableName: 'RecipeDiets' // specify the table name explicitly
  });

  return RecipeDiet;
};
