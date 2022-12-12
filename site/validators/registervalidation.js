const { check, body } = require('express-validator');
const db = require('../database/models');

module.exports = [

    // Nombre
    check('name').notEmpty().withMessage('Este campo es obligatorio').bail()
        .matches(/^[a-zA-Z0-9\sñáéíóúü ]*$/).withMessage("El nombre no debe contener datos numéricos ni especiales")
        .isLength({ min: 5 }).withMessage('Debe haber por lo menos 5 letras'),

    // Email
    check('email').notEmpty().withMessage('Este campo es obligatorio').bail()
        .isEmail().withMessage('Debe ingresar un email valido'),

    // Pass
    check('pass').notEmpty().withMessage('Este campo es obligatorio').bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,12})$/).withMessage('La contraseña debe tener entre 8 y 12 caracteres, una mayuscula, una minuscula y un numero.'),

    // Pass2
    check('pass2').notEmpty().withMessage('Debe confirmar la contraseña').bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,12})$/).withMessage('La contraseña debe tener entre 8 y 12 caracteres, una mayuscula, una minuscula y un numero.').bail()
        .custom((value, { req }) => value !== req.body.pass ? false : true).withMessage('Las contraseñas no coinciden'),

]