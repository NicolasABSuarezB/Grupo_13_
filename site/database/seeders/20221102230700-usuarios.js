'use strict';

/** @type {import('sequelize-cli').Migration} */
let listado = require('../../data/usuarios.json');

let usuarios = listado.map(usuario =>{
   let elemento = {
      nombre: usuario.nombre,
      apellido: null,
      email: usuario.email,
      contrase: usuario.contrase,
      foto: usuario.foto,
      cp: null,
      telefono: usuario.numero,
      id_roles: usuario.id_rol === 'admin' ? 2 : 1,
      id_paises: null,
      id_generos: null,
      createdAt: new Date,
      updatedAt: new Date
   }
   return elemento
})

module.exports = {
   async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('usuarios', usuarios, {});
   },
 
   async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('usuarios', null, {});
   }
 };
 