const Reservas=require('../model/Reservas');

exports.obtener = async (req, res) => {
    try {
        const reservas=await Rerservas.find();
        res.status(200).json(Reservas);
    } catch (error) {
       res.status(500).json(error);
    }
}

