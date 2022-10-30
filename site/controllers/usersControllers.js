const session = require("express-session");
let usuarios = require("../data/users.json");
const { validationResult } = require('express-validator')
const db = require('../database/models')

module.exports = {
    login: (req, res) => {
        return res.render('login')
    },
    logearse: (req, res) => {
        const { email } = req.body;
        /* let usuario = usuarios.find(use => use.email === email) */
        db.usuarios.findOne({
            where : {
                email
            }
        })
        .then(usuario => {
            req.session.sessionuser = {

                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                genero: usuario.genero,
                foto: usuario.foto
    
            }
        })
        req.session.sessionuser = {

            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
            genero: usuario.genero,
            foto: usuario.foto

        }
        res.cookie('hola', req.session.sessionuser)
        return res.redirect('/')

    },
    register: (req, res) => {
        res.render('register')
    },
    registrase: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            return res.redirect('/login')
        } else {
            //return res.send(errors)
            return res.render('register', { errors: errors.mapped(), old: req.body })
        }


    },
    informacion: (req, res) => {
        return res.render('informacion')
    },
    cerrar: (req, res) => {
        req.session.sessionuser == null
        return res.redirect('/login')
    },
    perfilusuario: (req, res) => {
        res.render('perfilusuario')
    },
}
