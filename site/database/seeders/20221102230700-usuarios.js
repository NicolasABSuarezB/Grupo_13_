'use strict';

/** @type {import('sequelize-cli').Migration} */
let listado = require('../../data/usuarios.json');
let listagenero=["Female","Male","Non-binary"]

let usuarios = listado.map(usuario =>{

   let genero
  
  
  
  listagenero.forEach((categoriaLista,index) => {
    if (categoriaLista == usuario.genero) {
        return genero = index + 1
    }})

   let elemento = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      contrase: usuario.contrase,
      foto: usuario.foto,
      cp: usuario.cp,
      telefono: usuario.numero,
      id_roles: usuario.id_rol === 'admin' ? 2 : 1,
      id_paises: null,
      id_generos: genero,
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
 