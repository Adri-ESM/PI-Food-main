const Sequelize = require('sequelize');

const Diet = (sequelize) => {
  const DietModel = sequelize.define('Diet', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  },
  {timestamps:false}
  );

  return DietModel;
};

module.exports = Diet;
