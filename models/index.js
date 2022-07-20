const Sequelize = require("sequelize");
const sequelize = new Sequelize('nodeapi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });
  const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.utilisateur = require('./utilisateur.js')(sequelize, Sequelize);
module.exports = db;