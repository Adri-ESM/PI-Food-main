const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Diet = sequelize.define('Diet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Diets' // specify the table name explicitly
  });

  return Diet;
};
