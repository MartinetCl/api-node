const db = require('../models');
const Utilisateur = db.utilisateur;
const Op = db.Sequelize.Op;// Create 
exports.create = (req, res) => {
  const utilisateur = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    author: req.body.author,
    published: req.body.published ? req.body.published : false
  };  
  Utilisateur.create(utilisateur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while creating the User."
     });
    });
};
// Find Single 
exports.findOne = (req, res) => {
  const id = req.params.id;
  Utilisateur.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
      message: "Error retrieving User with id=" + id
    });
  });
};
// Update 
exports.update = (req, res) => {
  const id = req.params.id;
  Utilisateur.update(req.body, {
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "User was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update User with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating User with id=" + id
    });
  });
};
// Delete 
exports.delete = (req, res) => {
  const id = req.params.id;
  Utilisateur.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "User was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete User with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete User with id=" + id
    });
  });
};