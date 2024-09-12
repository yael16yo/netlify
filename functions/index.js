require('dotenv').config(); // Importer dotenv pour charger les variables d'environnement

const express = require("express");
const app = express();
const cors = require('cors');

const routeMails = require('./routes/routeMails.js');

// Configuration de CORS et JSON
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content', 'Accept', 'Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.use(express.json());

// Utiliser les routes
app.use('/functions/mails', routeMails);

const PORT = process.env.PORT || 6284; // Utiliser la variable d'environnement PORT si disponible

app.listen(PORT, () => {
    console.log(`Server running on : http://localhost:${PORT}`);
});