const { check } = require('express-validator');
const db = require('../database/models');

module.exports = [

    // Nombre
    check('name').notEmpty().withMessage('Este campo es obligatorio').bail()
        //Falta validar: NO NUMEROS NI CARACTERES ESPECIALES.
        .isLength({ min: 5 }).withMessage('Debe haber por lo menos 5 letras'),

    // Email
    check('email').notEmpty().withMessage('Este campo es obligatorio').bail()
        .isEmail().withMessage('Debe ingresar un email valido')
        .custom(value => {
            return db.usuarios.findOne({
                where: {
                    email: value.trim()
                }
            })
                .then(user => {
                    if (user && user.email === value.trim()) {
                        return Promise.reject('El email se encuentra registrado')
                    }
                })
        }),

    // Pass
    check('pass').notEmpty().withMessage('Este campo es obligatorio').bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,12})$/).withMessage('La contraseña debe tener entre 8 y 12 caracteres, una mayuscula, una minuscula y un numero.').bail()
        .isLength({ min: 8 }).withMessage('Debe haber por lo menos 8 carcteres').bail()
        .isLength({ max: 12 }).withMessage('Maximo 12 carcteres').bail(),

    // Pass2
    check('pass2').notEmpty().withMessage('Debe confirmar la contraseña')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,12})$/).withMessage('La contraseña debe tener entre 8 y 12 caracteres, una mayuscula, una minuscula y un numero.').bail()
        .isLength({ min: 8 }).withMessage('Debe haber por lo menos 8 carcteres').bail()
        .isLength({ max: 12 }).withMessage('Maximo 12 carcteres').bail()
        .custom((value, { req }) => value !== req.body.pass ? false : true).withMessage('Las contraseñas no coinciden').bail(),

]