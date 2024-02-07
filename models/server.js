const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.mascotaPath = '/api/mascotas';

        this.conectarDB();
        this.middlewars();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewars(){
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user.routes'));
        this.app.use(this.mascotaPath, require('../routes/mascota.routes'));
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor ejecutandose y escuchando en el puerto', this.port)
        });
    }
}

module.exports = Server;