const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { mascotaPost
} = require('../controllers/mascota.controller');

const router = new Router();

router.post(
    "/",
    [
      check("nombreMas", "El nombre no puede estar vacio").not().isEmpty(),
      check("razaMas", "Tienes que agregar la raza de la mascota").not().isEmpty(),
      check("edadMas", "Tienes que agregar la edad de la mascota").not().isEmpty(),
      check("estadoMas", "Agregar el estado de la mascota").not().isEmpty(),
      validarCampos,
    ], mascotaPost);
