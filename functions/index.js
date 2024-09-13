require('dotenv').config(); // Importer dotenv pour charger les variables d'environnement

const express = require("express");
const app = express();
//const cors = require('cors');

const routeMails = require('./routes/routeMails.js');

// Configuration de CORS et JSON
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// Utiliser les routes
app.use('/api/mails', routeMails);

const PORT = process.env.PORT || 6284; // Utiliser la variable d'environnement PORT si disponible

app.listen(PORT, () => {
    console.log(`Server running on : http://localhost:${PORT}`);
});