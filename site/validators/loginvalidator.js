const { check, body } = require('express-validator');
const db = require('../database/models');
const bcryptjs = require('bcryptjs');

module.exports = [
    check('email').notEmpty().withMessage('Debe ingresar su email').bail()
        .isEmail().withMessage('No es un email valido'),

    check('pass').notEmpty().withMessage('Debe ingresar su contraseña').bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,12})$/).withMessage('La contraseña debe tener entre 8 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero').bail()
        .isLength({ min: 8 }).withMessage('Debe haber por lo menos 8 carcteres').bail()
        .isLength({ max: 12 }).withMessage('Maximo 12 carcteres').bail(),
]