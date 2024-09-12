const PORT = 6284
const express = require("express")
const app = express()
const cors = require('cors')

const routeMails = require('./routes/routeMails.js')


const corsOptions = {
    origin: '*', // This allows requests from any origin (equivalent to Access-Control-Allow-Origin: *)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allowed methods
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content', 'Accept', 'Content-Type', 'Authorization'], // Allowed headers
};
app.use(cors(corsOptions))
app.use(express.json());
app.use('/api/mails', routeMails)

app.listen(PORT, () => {
    console.log(`Servers running on : http://localhost:${PORT}`)
})