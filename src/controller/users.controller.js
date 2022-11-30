const User=require('../model/User');

exports.obtener = async (req, res) => {
    try {
        const user=await User.find();
        res.status(200).json(user);
    } catch (error) {
       res.status(500).json(error);
    }
}


exports.obtenerId = async (req, res) => {
    try {
        const user=await User.find();
        res.status(200).json(user);
    } catch (error) {
       res.status(500).json(error);
    }
}


