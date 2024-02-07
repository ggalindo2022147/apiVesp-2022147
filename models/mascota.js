const { Schema, model } = require('mongoose');

const MascotaSchema = Schema({
    nombreMas: {
        type: String,
        require: [true, 'Nombre para la mascota obligatorio']
    },
    razaMas: {
        type: String,
        require: [true, 'Raza para la mascota obligatoria']
    },
    edadMas: {
        type: String,
        require: [true, 'La edad para la mascota es obligatoria']
    },
    estadoMas: {
        type: String,
        default: true
    },
});

module.exports = model ('Mascota', MascotaSchema);