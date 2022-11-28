const mongoose = require('mongoose');

const conexionDB = async () => {
    const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uax5byv.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
    try {
        const DB=await mongoose.connect(url)
        console.log("conexion satisfactoria", DB.connection.name);
    } catch (error) {
        console.log(error);
        console.log(url);
    }
}


module.exports=conexionDB;