const { check } = require('express-validator');

module.exports = [
    check('Titulo').notEmpty().withMessage('Debes ingresar el titulo de tu producto').bail()
    .isLength({ min: 5 } ,{max : 100}).withMessage('El titulo del producto debe tener minimo 5 letras y 100 maximo')
    .matches(/^[a-zA-Z\sñáéíóúü]*$/),

    check('Categoria').notEmpty().withMessage('Debes ingresar una categoria'),

    check('Precio').notEmpty().withMessage('Debes ingresar un precio de tu producto').bail()
    .isInt().matches(/^[0-9]+/).withMessage('Debe ingresar numeros positivos')
    .isLength({min : 2} , {max : 10}).withMessage('El precio del producto debe tener minimo 2 caracteres y maximo 10'),

    check('Descuento').notEmpty().withMessage('Este campo es obligatorio').bail()
    .isInt().matches(/^[0-9]+/).withMessage('Debe ingresar numeros positivos')
    .isLength({max : 2}).withMessage('El descuento no debe ser mayor a 2 cifras')
    .custom(value => {
        if(value < 0 || value > 80 ){
            return false
        }
        return true
    }).withMessage('El descuento no puede ser mayor al 80%'),

    check('Stock').notEmpty().withMessage('Debes ingresar una cantidad de productos').bail()
    .isInt().matches(/^[0-9]+/).withMessage('Debe ingresar numeros positivos')
    .custom(value=>{
        if(value > 1000){
            return false
        }
        return true
    }).withMessage('El stock maximo es 1000'),

    check('Descripcion').trim().notEmpty().withMessage('Debes ingresar una descripcion de tu producto').bail()
    .isLength({min:10}).withMessage('Debe contener minimo 10 caracteres y maximo 255')
    .isLength({max:1000}).withMessage('Debe contener maximo 255 caracteres'),

    /* check('imagen').notEmpty().withMessage('Este campo es obligatorio')
    .matches(/\.(jpg|jpeg|png|jfif|gif|webp)$/).withMessage('Solo se permite ingresar una imagen con los siguientes fomatos (jpg|jpeg|png|jfif|gif|webp)'), */


]