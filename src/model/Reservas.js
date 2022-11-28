const { Schema, model } = require("mongoose");

const reservaSchema = new Schema({
    fentrada: Date,
    fsalidad: Date,
    cantidadNoches: Number,
    freserva: Date,
    totalreserva: Number,

    user:[{
        type:Schema.Types.Number,
        ref:"Users"
    }],

    habitaciones: [{
        type:Schema.Types.Number,
        ref:"Habitacion"
    }]

})
 
module.exports = model("Reservas", reservaSchema)