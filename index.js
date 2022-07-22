//import des différents package utilisés
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

//définition de constantes
const app = express();
const db = require("./models/index.js");
db.sequelize.sync();

//définition de l'enregistrement des fichiers
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'images');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + '-' + file.originalname);
    }
  });
  
  //filtrage des types de fichier
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

app.use(bodyParser.json()); // application/json
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
app.use('/images', express.static(path.join(__dirname, 'images')));

require('./routes/utilisateur.js')(app);
require('./routes/auth')(app);

// Port
app.listen(3000);