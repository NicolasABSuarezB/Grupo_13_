const fs = require('fs');
const path = require('path')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const usuarios = require('../data/usuarios.json')

const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(dato, null, 4), 'utf-8')

module.exports = {
    login: (req, res) => {
        return res.render('user/login')
    },
    processLogin:(req,res) => {
       /*  return res.send(req.body) */
        let errors = validationResult(req)
        if (errors.isEmpty()) {
        
            const {email,guardar} = req.body
            let usuario = usuarios.find(user => user.email === email)

            req.session.userLogin = {
                id : usuario.id,
                nombre : usuario.name,
                image : usuario.image,
                rol : usuario.rol
            }
            if(guardar){
                res.cookie('loving-paws',req.session.userLogin,{maxAge: 1000 * 60 * 60 * 24})
            }

            return res.redirect('/users/profile')
            /* return res.send(req.body) */
        } else {
            /* return res.send(errors.mapped()) */
            return res.render('users/login', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },    
    register: (req, res) => {
        return res.render('user/register')
    },
    processRegister:(req,res) => {
        
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'image',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }
        if (errors.isEmpty()) {
            let {name,email,pass,telefono} = req.body
            let usuarioNuevo = {
                id:usuarios[usuarios.length - 1].id + 1,
                name,
                apellido: null,
                email,
                genero: null,
                pass: bcrypt.hashSync(pass, 12),
                pais: null,
                direccion: null,
                numero:telefono,
                image: req.file.size > 1 ? req.file.filename : "avatar-porDefecto.png",
                rol: "usuario"
            }
            usuarios.push(usuarioNuevo)
            guardar(usuarios)

            return res.redirect('/')
        } else {

            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', '..', 'public', 'images', 'users', dato))
            if (ruta(req.file.filename) && (req.file.filename !== "default-image.png")) {
                fs.unlinkSync(path.join(__dirname, '..', '..', 'public', 'images', 'users', req.file.filename))
            }
        }
    },
    informacion: (req, res) => {
        return res.render('informacion')
        },
    procesoDeRegistro: (req, res) => {
        return res.send(req.body)
    },
    perfil: (req,res) => {
        return res.render('user/perfil')
    }
}