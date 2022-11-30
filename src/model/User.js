const { Schema, model } = require("mongoose");


const userSchema = new Schema ({
    _id: Number,
    tipoDoc: Number,
    nombre: String,
    apellido: String,
    fnacimiento: Date,
    genero: String,
    email: {type: String , Require: true, unique: true},
    telefono: Number,
    paisorigen: String,
    password: String,
    tipouser: String,
    img: String,

    reservas:[{
        type: Schema.Types.ObjectId,
        ref:'Reservas'
    }]

})

module.exports = model("Users", userSchema)