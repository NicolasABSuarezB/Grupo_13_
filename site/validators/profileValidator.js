const { check, body } = require('express-validator');

module.exports = [
    // Nombre
    check('name').notEmpty().withMessage('El nombre es obligatorio').bail()
        .matches(/^[a-zA-Z0-9\sñáéíóúü ]*$/).withMessage("El nombre no debe contener datos numericos ni especiales").bail()
        .isLength({ min: 5 }).withMessage('Debe haber por lo menos 5 letras').bail(),

    // Apellido
    check('apellido').notEmpty().withMessage('El apellido es obligatorio').bail()
        .matches(/^[a-zA-Z0-9\sñáéíóúü ]*$/).withMessage("El nombre no debe contener datos numericos ni especiales").bail()
        .isLength({ min: 5 }).withMessage('Debe haber por lo menos 5 letras').bail(),

    // Genero    check('genero').notEmpty().withMessage('').bail(),
    // Pais    check('pais').notEmpty().withMessage('').bail(),
    // Provincia check('provincia').notEmpty().withMessage('').bail(),

    // Direccion
    check('direccion').notEmpty().withMessage('La dirección es obligatoria').bail(),

    // Codigo Postal
    check('codigopostal').notEmpty().withMessage('El codigo postal es obligatorio').bail()
        .isNumeric().withMessage('Solo se permiten numeros').bail(),

    // Telefono
    check('telefono').notEmpty().withMessage('El numero de telefono es obligatorio').bail()
        .isNumeric().withMessage('Solo se permiten numeros').bail(),
]