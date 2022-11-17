const express = require('express');
const conexionDB = require('./db');

const app=express();

require('dotenv').config();

//Conexion a la bd
conexionDB();

//Configuraciones
app.set("name", "api-hotelia");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');

