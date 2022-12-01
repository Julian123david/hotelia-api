const express = require('express');
const conexionDB = require('./db');
const rutasHab=require('./routes/habitacion.routes');
const rutasUser=require('./routes/user.routes');
const rutasReserva=require('./routes/reserva.routes');

const app=express();

require('dotenv').config();

//Conexion a la bd
conexionDB();

//Configuraciones
app.set("name", "api-hotelia");
app.set("port", process.env.PORT || 3200);
app.set("host", process.env.HOST || 'localhost');

//Midleware
app.use(express.json());

//llamado de rutas
app.use(express.static('public')); 
app.use('/public' , express.static('public/upload'));


app.use('/habitaciones', rutasHab);
app.use('/users', rutasUser);
app.use('/reservas', rutasReserva);



module.exports = app;