const { check, body } = require('express-validator');
const db = require('../database/models');
const bcryptjs = require('bcryptjs');

module.exports = [
    check('email').notEmpty().withMessage('Debe ingresar su email').bail()
        .isEmail().withMessage('No es un email valido'),

    check('pass').notEmpty().withMessage('Debe ingresar su contraseña').bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,12})$/).withMessage('La contraseña debe tener entre 8 y 12 caracteres, una mayuscula, una minuscula y un numero').bail(),

    body('pass')
        .custom((value, { req }) => {
            return db.usuarios.findOne({
                where: { email: req.body.email }
            })
                .then(user => {
                    if (!bcryptjs.compareSync(value, user.dataValues.contrase)) {
                        return Promise.reject()
                    }
                })
                .catch(() => {
                    return Promise.reject("Email o contraseña incorrecta")
                })
        })
]