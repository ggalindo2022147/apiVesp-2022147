const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Mascota = require('../models/mascota');

const esRolValido = async (role = '') => {
    const existeRol = await Role.findOne({role});
    if(!existeRol){
        throw new Error(`El rol ${ role } no existe en la base de datos`);
    }
}

const existenteEmail = async (correo = '') =>{
    const existenteEmail = await Usuario.findOne({correo});
    if(existenteEmail){
        throw new Error(`El correo ${ correo } ya esta registrado`);
    }
}

const existeUsuarioById = async (id = '') => {
    const existeUsuario = await Usuario.findOne({id});
    if(existeUsuario){
        throw new Error(`El usuario con el id ${ id } No existe`)
    }
}

const existeMascotaById = async (id = '') => {
    const existeMascota = await Mascota.findOne({id});
    if(existeMascota){
        throw new Error(`La mascota con el id ${ id } No existe`)
    }
}

module.exports = {
    esRolValido,
    existenteEmail,
    existeUsuarioById,
    existeMascotaById
}