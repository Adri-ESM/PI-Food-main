const { Sequelize, DataTypes } = require('sequelize');


const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

// Set up Sequelize with your database credentials
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // Use 'postgres' for PostgreSQL
});

// Load models dynamically
const db = {};
const modelsPath = path.join(__dirname, './models');

fs.readdirSync(modelsPath).forEach((file) => {
  const model = require(path.join(modelsPath, file))(sequelize, DataTypes);
  db[model.name] = model;
});

// Define associations between models
db.Recipe.belongsToMany(db.Diet, { through: db.RecipeDiet });
db.Diet.belongsToMany(db.Recipe, { through: db.RecipeDiet });
db.RecipeDiet.belongsTo(db.Recipe);
db.RecipeDiet.belongsTo(db.Diet);

  // Define many-to-many relationship with Diet model
  // Recipe.belongsToMany(sequelize.models.Diet, { through: sequelize.models.RecipeDiet });
  // sequelize.models.Diet.belongsToMany(Recipe, { through: sequelize.models.RecipeDiet });

// Export the database connection and models
db.conn = sequelize; // Define and export conn object
db.Sequelize = Sequelize;

module.exports = db;


