module.exports = (sequelize, Sequelize) => {
    const Utilisateur = sequelize.define('utilisateur', {
        nom: {
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        },
        login: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        droit: {
            type: Sequelize.BOOLEAN
        }  });  
        return Utilisateur;
  };