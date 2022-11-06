'use strict';

/** @type {import('sequelize-cli').Migration} */
let listado = require('../../data/usuarios.json');

let usuarios = listado.map(usuario =>{
   let elemento = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      contrase: usuario.contrase,
      foto: usuario.foto,
      cp: usuario.cp,
      telefono: usuario.numero,
      id_roles: usuario.id_roles,
      id_paises: usuario.id_paises,
      id_generos: usuario.id_generos,
      createdAt: new Date,
      updatedAt: new Date
   }

})

module.exports = {
   async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('usuarios', usuarios, {});
   },
 
   async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('usuarios', null, {});
   }
 };
 