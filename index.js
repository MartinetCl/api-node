const express = require('express');
const app = express();
const db = require("./models/index.js");
db.sequelize.sync();

require('./routes/utilisateur.js')(app);

// Port
app.listen(3000);