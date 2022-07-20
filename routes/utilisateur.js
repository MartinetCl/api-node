module.exports = app => {  
    const utilisateur = require('../controllers/utilisateur.js');
    var router = require('express').Router();  
    // Create a new User
    router.post('/', utilisateur.create);  
    // Retrieve a single User with id
    router.get('/:id', utilisateur.findOne);  
    // Update a User with id
    router.put('/:id', utilisateur.update);  
    // Delete a User with id
    router.delete('/:id', utilisateur.delete);  
    app.use('/utilisateur', router);
};