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
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    tableName: 'Diets' // specify the table name explicitly
  });

  return Diet;
};
