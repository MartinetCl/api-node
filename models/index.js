const Sequelize = require("sequelize");
//définition de la connexion à la BDD
const sequelize = new Sequelize('nodeapi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });
  const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//appel de notre models (on peut en mettre autant que l'on veut pour tous les charger en une fois)
db.utilisateur = require('./utilisateur.js')(sequelize, Sequelize);
module.exports = db;