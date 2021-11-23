const express = require('express');
const { dbConnection, quotes } = require('./database/config');
require('dotenv').config();

console.log(process.env);

//To create express server
const app = express();

//DB
dbConnection();
//quotes();

//Directorio público (middleware)
app.use( express.static('public'))

//Read and parsing body
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'));
//Todo: CRUD: Eventos

app.listen( process.env.PORT , () => {
    console.log(`Server Running on port ${ process.env.PORT }`);
});
