const { response } = require('express');
const Mascota = require('../models/mascota');


const mascotaGet = async (req, res = response) => {
    const {limite, desde} = req.query;
    const query = {estado: true};

    const [total, mascota] = await Promise.all([
        Mascota.countDocuments(query),
        Mascota.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        mascota
    })
}

const getMascotaById = async (req, res) => {
    const {id} = req.params;
    const mascota = await Mascota.findOne({_id: id});

    res.status(200).json({
        mascota
    });
}

const putMascota = async (req, res = response) =>{
    const { id } = req.params;
    const { _id,...resto } = req.body;

    const mascota = await Mascota.findByIdAndUpdate(id, resto);

    res.status(200).json({
        msg: 'Mascota actualizada!!!',
        mascota
    });
}

const mascotaDelete = async (req,res) => {
    const {id} = req.params;
    const mascota = await Mascota.findByIdAndUpdate(id, {estadoMas: false});

    res.status(200).json({
        msg: 'Mascota no comprada',
        mascota
    })
}

const mascotaPost = async (req, res) => {
    const {nombreMas, razaMas, edadMas, estadoMas} = req.body;
    const mascota = new Mascota({nombreMas, razaMas, edadMas, estadoMas});

    await mascota.save();
    res.status(202).json({
        mascota
    });
}



module.exports = {
    mascotaPost,
    mascotaGet,
    getMascotaById,
    putMascota,
    mascotaDelete
}
