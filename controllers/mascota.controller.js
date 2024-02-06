const Mascota = require('../models/mascota');

const mascotaPost = async (req, res) => {
    const {nombreMas, razaMas, edadMas, estadoMas} = req.body;
    const mascota = new Mascota({nombreMas, razaMas, edadMas, estadoMas});

    await mascota.save();
    res.status(202).json({
        mascota
    });
}

module.exports = {
    mascotaPost
}
