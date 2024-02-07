const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { mascotaPost,
        mascotaGet,
        getMascotaById,
        putMascota,
        mascotaDelete } = require('../controllers/mascota.controller');

const Mascota = require('../models/mascota');
const { existeMascotaById } = require('../helpers/db-valitadors');

const router = Router();

router.get("/", mascotaGet);

router.get(
  "/:id",
  [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeMascotaById),
    validarCampos
  ],getMascotaById);

  router.put(
    "/:id",
    [
        check('id', 'No es un id valido').isMongoId(),
        validarCampos 
    ], putMascota);

router.post(
    "/",
    [
      check("nombreMas", "El nombre no puede estar vacio").not().isEmpty(),
      check("razaMas", "Tienes que agregar la raza de la mascota").not().isEmpty(),
      check("edadMas", "Tienes que agregar la edad de la mascota").not().isEmpty(),
      validarCampos,
    ], mascotaPost);

    router.delete(
      "/:id",
      [
        check('id', 'No es un id valido').isMongoId(),
      ], mascotaDelete);

    module.exports = router;
